export class BankAccount {
  isOpen = false;
  currentBalance = 0;

  open() {
    if (this.isOpen) throw new ValueError();
    this.isOpen = true;
  }

  close() {
    if (!this.isOpen) throw new ValueError();
    this.isOpen = false;
    this.currentBalance = 0;
  }

  deposit(value) {
    if (!this.isOpen || value < 0) throw new ValueError();
    this.currentBalance += value;
  }

  withdraw(value) {
    if (!this.isOpen) throw new ValueError();
    const newValue = this.currentBalance - value;
    if (newValue < 0 || newValue > this.currentBalance) throw new ValueError();
    this.currentBalance = newValue;
  }

  get balance() {
    if (!this.isOpen) throw new ValueError();
    return this.currentBalance;
  }
}

const account = new BankAccount();
account.open();
account.deposit(100);
account.withdraw(50);
console.log(account.balance);
