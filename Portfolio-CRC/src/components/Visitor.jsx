import React from "react";

function Visitor({visit}) {
    return (
   <div className="py-5 text-center">
  
   <p className="text-sm mt-2 opacity-50">
   <span className="inline-block px-2 py-1 font-semibold border-2 border-[#013dc4] dark:border-white rounded-md">
       {visit} 
    </span>    
   </p>
 
  </div>)

}
export default Visitor;


