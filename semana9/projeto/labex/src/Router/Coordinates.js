
export const goToHome = (history) => {
    history.push("/")
}

export const goToApplication = (history) => {
    history.push("/application-test")
}

export const goToCongratulations = (history) => {
    history.push("/congratulations")
}

export const goToLogin = (history) => {
    history.push("/login")
}

export const goToCreateTrip = (history) => {
    history.push("/create-trip")
}

export const goToPainel = (history) => {
    history.push("/painel")
    console.log("teste")
}

export const goToTripDetails = (history, id) => {
    history.push(`/trip-details/${id}`)
}