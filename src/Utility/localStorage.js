

const getStrodeCard= ()=>{
      const saveCart = localStorage.getItem('job-application');
      if(saveCart){
          return JSON.parse(saveCart);
      }
      return [];
}

const saveApplication =(id)=>{
      const strodeJob = getStrodeCard();
      const exists = strodeJob.find(jobId => jobId === id);

      if(!exists){
           strodeJob.push(id);
           localStorage.setItem('job-application',JSON.stringify(strodeJob));
      }
}


export {getStrodeCard,saveApplication};