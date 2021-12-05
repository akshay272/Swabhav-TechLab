using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccountEventLib
{
    public delegate void DBalanceChanged(Account acc);

    public class Account
    {
        private int _accNo;
        private string _name;
        private double _balance;
        public event DBalanceChanged OnBalanceChanged = null;

        public Account(int accNo, string name, double balance)
        {
            this._accNo = accNo;
            this._name = name;
            this._balance = balance;
        }

        public void Deposite(double amount)
        {
            _balance += amount;
            if(OnBalanceChanged != null)
            {
                OnBalanceChanged(this);
            }
        }
        public int AccNumber
        {
            get { return _accNo; }
            set { _accNo = value; }
        }
        public double Balance
        {
            get { return _balance; }
            set { _balance = value; }
        }
        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }
    }

    
}
