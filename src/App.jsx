import Head from "./head"
import Small from "./smallcont"
import Big from "./bigcontains"
import ImageContain from "./bigcontains"
import Long from "./longconstin"
import planning from './assets/planning.png'


function App() {
  


  return (
  <div>
    <Head />
    <h1 className="firsth">
    The greatest software is not built overnight; it’s crafted with patience and dedication
    </h1>
    <div className="small-contain">
      <Small h='Custom Software Development:' constain='Crafting tailored solutions to meet specific business needs. Whether it’s a web application, mobile app, or enterprise software, they build it from scratch.' />
      <Small h='Application Modernization:' constain='Updating legacy systems, improving performance, and enhancing user experience. They breathe new life into outdated software.' />
      <Small h='Software Maintenance:' constain=' Ensuring smooth operation by fixing bugs, applying security patches, and optimizing performance. It’s like keeping a well-oiled machine running.' />
      <Small h='Monitoring & Reporting:' constain='Monitoring & Reporting: Proactively monitoring applications, identifying issues, and providing regular reports. Think of them as the vigilant guardians of your software.' />
      <Small h='Co-Sourcing App Services:' constain=' Collaborating seamlessly with your in-house team. They become an extension of your workforce, sharing expertise and accelerating development.' />
      <Small h='End-to-End Design-Build-Manage Services:' constain=' Taking care of the entire software lifecycle – from ideation and design to development, deployment, and ongoing management.' />

    </div>
    <div className="biggest">
      <Big  header='Planning:' constain='
Purpose: Define the software’s scope and purpose.
Tasks: Understand end-users’ needs, strategize for efficient execution, and conduct a feasibility study.
Key Documents: Project Plan and Software Requirement Specification (SRS).
Importance: Lays a solid foundation for the development process' />
      <ImageContain  sorce={planning}/>
      
        
    </div>
    

  </div>
    
  )
}

export default App
