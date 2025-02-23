//get a random poem from a poet (c.ganjoor.net replacement), 0 means random poet, 

const poets = [
  { name: "نامشخص", id: 0 },
    { name: "حافظ", id: 2 },
    { name: "خیام", id: 3 },
    { name: " ابوسعید ابوالخیر", id: 26 },
    { name: "صائب", id: 22 },
    { name: "سعدی", id: 7 },
    { name: " باباطاهر", id: 28 },
    { name: " مولوی", id: 5 },
    { name: " اوحدی", id: 19 },
    { name: " خواجو", id: 20 },
    { name: " شهریار", id: 35 },
    { name: " عراقی", id: 21 },
    { name: " فروغی بسطامی", id: 32 },
    { name: " سلمان ساوجی ", id: 40 },
    { name: " محتشم کاشانی ", id: 29 },
    { name: " امیرخسرو دهلوی", id: 34 },
    { name: " سیف فرغانی", id: 31 },
    { name: " عبید زاکانی", id: 33 },
    { name: " هاتف اصفهانی", id: 25 },
    { name: " سیف فرغانی", id: 31 },
    { name: " رهی معیری", id: 41 },
    


  ];
  
  function searchPoet(name) {
    if(name){
      const poet = poets.find(poet => poet.name === name);
      return poet
    }
    
   return {name:"",id:0}
}

  
  module.exports = {searchPoet};
  