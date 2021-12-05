using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MathDelegateApp
{
    delegate void DMathOperation(int a, int b);
    class Program
    {
        static void Main(string[] args)
        {
            DMathOperation f1;
            f1 = Add;
            f1 += Subtract;
            f1 += Multiply;
            f1 += Divide;
            f1 += Modulous;
            f1(50, 5);

        }
        static void Add(int a, int b)
        {
            Console.WriteLine("Addition of {0} and {1} is {2} ", a, b, (a + b));
        }
        static void Subtract(int a, int b)
        {
            Console.WriteLine("substraction of {0} and {1} is {2} ", a, b, (a - b));
        }
        static void Divide(int a, int b)
        {
            Console.WriteLine("division of {0} and {1} is {2} ", a, b, (a / b));
        }
        static void Modulous(int a, int b)
        {
            Console.WriteLine("modulous of {0} and {1} is {2} ", a, b, (a%b));
        }
        static void Multiply(int a, int b)
        {
            Console.WriteLine("multiply of {0} and {1} : {2}", a, b, (a*b));
        }
    }
}
