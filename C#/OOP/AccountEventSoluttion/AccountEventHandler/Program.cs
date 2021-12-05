using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AccountEventLib;
namespace AccountEventHandler
{
    class Program
    {
        static void Main(string[] args)
        {
            Account acc1 = new Account(1001, "Akshay Sawant", 5000);
            acc1.OnBalanceChanged += PrintDetails;
            acc1.OnBalanceChanged += UpdateDatabase;
            acc1.OnBalanceChanged += SendEmailNotification;
            acc1.Deposite(1000);
        }

        static void PrintDetails(Account acc)
        {
            Console.WriteLine("-----------------------------------------------------------------------------");
            Console.WriteLine("Account Number        : {0} ", acc.AccNumber);
            Console.WriteLine("Account holder Name   : {0} ", acc.Name);
            Console.WriteLine("Account Balance       : {0} ", acc.Balance);
        }
        static void UpdateDatabase(Account acc)
        {
            Console.WriteLine("\nStorin data in database..");
            Console.WriteLine("Data stored in databse as Account Number {0} Account Name {1} Current " +
                "Balance is {2}", acc.AccNumber, acc.Name, acc.Balance);
        }
        static void SendEmailNotification(Account acc)
        {
            Console.WriteLine("\nSending Mail...");
            Console.WriteLine("Mail send to Account Number {0} Current " +
                "Balance is {1}", acc.AccNumber, acc.Balance);
        }
    }
    
}
