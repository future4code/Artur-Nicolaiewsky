// import { useState, useEffect } from 'react'
// import styled from 'styled-components'
// import axios from 'axios'
// import useRequestDataGet from '../hooks/useRequestDataGet'


// export default function SubsTripPage() {
//   const [details, setDetails] = useState("none")
//   const [tripDetails, setTripDetails] = useState({})
//   const [allTrips, setAllTrips] = useState([])
//   const token = localStorage.getItem("token")

//   const showDetails = () => {
//     setDetails("initial")
//   }

//   const closeDetails = () => {
//     setDetails("none")
//   }


//   const getTripDetails = () => {
//       axios
//       .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-epps/trip/",
//       {
//           headers: {
//               auth: token
//           }
//       })
//       .then((res) => {
//           setTripDetails(res.data.trip)
//       })

//       .catch((err) => {
//           console.log(err.message)
//       })
//   }

//   useEffect(() => {
//       getTripDetails()
//   }, [])



//   const listTrips = useRequestDataGet(
//     "https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-epps/trips",
//     []
//     )

//     useEffect(() => {
      
//       setAllTrips(listTrips.trips)
//       console.log(allTrips.trips)

//     }, [])

//     const mapingIdTripsallTrips.map


//   console.log(tripDetails)

//   return (
    
//     <main>
//         <section>      
//             <h2>Inscrições para analise</h2>

//             {tripDetails && tripDetails.map((candidate) => {
//               return(
//                   <article>
                
//                       <p>{candidate.name}</p>
//                       <div>
//                         <div>
//                           <p>Idade: {candidate.age} anos</p>
//                           <p>Justificativa: {candidate.applicationText}</p>
//                           <p>Profissão: {candidate.profession}</p>
//                           <p>País: {candidate.country}</p>
//                           <p>Viagem: 7 tons de plutão</p>
//                         </div>
//                         <div>
//                           <button>Aprovar</button>
//                           <button>Reprovar</button>
//                         </div>
//                       </div>
//                   </article>
//               )
//             })}
            
//         </section>
//     </main>

//   )
// }
