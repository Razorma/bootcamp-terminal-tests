export default function mostProfitableDepartment(salesData){
    var departments = {};
    for(var i=0;i<salesData.length;i++){
     departments[salesData[i].department] = 0;
    };
    for(var i=0;i<salesData.length;i++){
      var departmentSales = departments[salesData[i].department];
      departmentSales += salesData[i].sales
      departments[salesData[i].department] = departmentSales;
    };
    let bestSales = 0;
    let bestDepartment = '';
    for(const department in departments){
      const highestSales = departments[department];
      if(highestSales>bestSales){
        bestSales = highestSales;
        bestDepartment = department;
      };
    };
    return bestDepartment
  };