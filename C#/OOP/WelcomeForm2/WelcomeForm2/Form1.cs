using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WelcomeForm2
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            
        }

        private void label1_Click(object sender, EventArgs e)
        {
            
        }
        
        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            GodListenning();
            //DevilListennig();
        }

        private void DevilListennig()
        {
            Console.WriteLine("Devil is Listenning");
        }

        private void GodListenning()
        {
            Console.WriteLine("God is Listenning");
        }
    }
}
