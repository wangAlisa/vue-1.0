define("js/filter/filter",function(){Vue.filter("price",function(e){return e+" 元"}),Vue.filter("orignPrice",function(e){return"门市价: "+e+"元"}),Vue.filter("sales",function(e){return"销量 "+e}),Vue.filter("evaluate",function(e){return"评分"+e})});