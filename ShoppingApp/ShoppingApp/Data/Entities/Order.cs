﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingApp.Data.Entities
{
  public class Order
  {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }
    public DateTime OrderDate { get; set; }
    public string OrderNumber { get; set; }
    public ICollection<OrderItem> Items { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public StoreUser User { get; set; }
  }
}
