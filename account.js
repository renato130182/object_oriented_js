class bankAccount {
	constructor(agency, number, type) {
		this.agency = agency;
		this.number = number;
		this.type = type;
		this._balance = 0;
        this._investments = 0;
	}
    validateBalance(value){
        if (value > this._balance) {
			console.log('Withdrawal denied; Insufficient funds!');
            return false;
		}
        return true;
    }

	withdraw(value) {
        if(!this.validateBalance) return;
        this._balance = this._balance - value;
        return this._balance;
        
	}

	deposit(value) {
		this._balance = this._balance + value;
		return this._balance;
    }
    
    invest(value){
        if(!this.validateBalance) return;
        this._investments = this._investments + value;
        this._balance = this._balance - value;
		return this._investments;
    }

    redeem(value){
        if (value > this._investments) {
			return console.log('Withdrawal denied; Insufficient funds!');
		}
		this._investments = this._investments - value;
        this._balance = this._balance + value;
		return this._investments;
    }
    set balance(value){
        this._balance = value;
    }

    get balance(){
        return this._balance;
    }

}

class checkingAccount extends bankAccount {
	constructor(agency, number, creditCard) {
		super(agency, number);
		this.type = 'checking';
		this._creditCard = creditCard;
	}

	set creditCard(value) {
		this._creditCard = value;
	}

	get creditCard() {
		return this._creditCard;
	}
}

class savingsAccount extends bankAccount {
	constructor(agency, number) {
		super(agency, number);
		this.type = 'savings';
	}
}

class universityAccount extends bankAccount {
	constructor(agency, number) {
		super(agency, number);
		this.type = 'universit';
	}

	withdraw(value) {
		if (value > 500) {
			return 'Operation denied.';
		}

		this.balance = this.balance - value;
		return this.balance;
	}
}

const myAcount = new checkingAccount(1, 1, true);
const myUniversityAccount = new universityAccount(1,2);
console.log(myAcount);
myAcount.deposit(1000);
console.log(myAcount);
myAcount.withdraw(100);
console.log(myAcount);
myAcount.invest(200);
console.log(myAcount);
myAcount.redeem(100);
console.log(myAcount);