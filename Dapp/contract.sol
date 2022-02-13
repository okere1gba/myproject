pragma solidity ^0.8.11;
  
// Creating a Smart Contract
contract StructDemo{
  
   // Structure of individual
   struct individual{
       
       // State variables
       uint empid;
       string name;
       string fatherName;
       string motherName;
       string dateRegistered;
       string hospitalRegistered;
       string placeOfBirth;
       string lga;
       
       
   }
   
   individual []output;
  
   // Function to add 
   //individual details
   function addindividual(
     uint empid, string memory name, string memory dateRegistered, string memory hospitalRegistered,
     string memory placeOfbirth,string memory fatherName,string memory motherName, string memory lga ) public{
       individual memory e
         =individual(empid,name,fatherName, motherName,dateRegistered,hospitalRegistered,placeOfbirth,lga);
       output.push(e);
   }
    
    function mymassage() public pure returns(string memory){
      return("hello contract user");
    }
  // Function to get
  // details of employee
   function getidividual(
     uint empid
   ) public view returns(
     string memory, 
     string memory, 
     string memory,
     string memory, 
     string memory, 
     string memory,
     string memory){
       uint i;
       for(i=0;i<output.length;i++)
       {
           individual memory e
             =output[i];
           
           // Looks for a matching 
           // employee id
           if(e.empid==empid
    )
           {
                  return(e.name,e.fatherName, e.motherName,e.dateRegistered,e.hospitalRegistered,e.placeOfBirth,e.lga);
           }
       }
       
     // If provided employee 
     // id is not present
     // it returns Not 
     // Found
     return("Not Found",
            "Not Found",
            "Not Found",
            "Not Found",
            "Not Found",
            "Not Found",
            "Not Found");
   }
}