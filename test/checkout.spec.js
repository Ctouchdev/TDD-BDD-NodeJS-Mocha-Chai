const Checkout = require('./checkout.js');
var expect = require('chai').expect;

var checkout;

beforeEach(() => {
    checkout = new Checkout();
    checkout.addItemPrice('Item 1', 1);
    checkout.addItemPrice('Item 2', 2);
});

it('Can Calculate the current total', () => {
    checkout.addItem('Item 1');
    expect(checkout.calculateTotal()).to.equal(1);
});

it('Can add multiple items and get total', () => {
    checkout.addItem('Item 1');
    checkout.addItem('Item 2');
    expect(checkout.calculateTotal()).to.equal(3);
});

it('Can add discount rules', () => {
    checkout.addDiscount('Item 1', 3, 2);
});

it('Can Apply discount rules to total', () => {
    checkout.addDiscount('Item 1', 3, 2);
    checkout.addItem('Item 1');
    checkout.addItem('Item 1');
    checkout.addItem('Item 1');
    expect(checkout.calculateTotal()).to.equal(2);
});

it('Throws exception when item added w no price', () => {
    expect(() => {
        checkout.addItem('c')
    }).to.throw();
});