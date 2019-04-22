using AutoMapper;
using ShoppingApp.Data.Entities;
using ShoppingApp.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingApp.Data
{
    public class ShoppingAppMappingProfile : Profile
    {
        public ShoppingAppMappingProfile()
        {
            CreateMap<Order, OrderViewModel>()
                .ForMember(o => o.OrderId, ex => ex.MapFrom(o => o.Id))
                .ForMember(x => x.Items, y => y.MapFrom(s => s.Items))
                .ReverseMap();

            CreateMap<OrderItem, OrderItemViewModel>()
               .ReverseMap();

        }


    }
}
