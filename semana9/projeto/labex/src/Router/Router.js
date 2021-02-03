import HomePage from '../Pages/HomePage'
import ApplicationFormPage from '../Pages/ApplicationFormPage'
import CongratulationsPage from '../Pages/CongratulationsPage'
import CreateTripPage from '../Pages/CreateTripPage'
import ErrorPage from '../Pages/ErrorPage'
import LoginPage from '../Pages/LoginPage'
import PainelControlPage from '../Pages/PainelControlPage'
import SubsTripPage from '../Pages/SubsTripPage'
import TripDetailsPage from '../Pages/TripDetailsPage'
import Header from '../Components/Header'

import {BrowserRouter, Switch, Route} from 'react-router-dom'


export const Router = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Switch>

                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route exact path="/application-test">
                    <ApplicationFormPage/>
                </Route>

                <Route exact path="/congratulations">
                    <CongratulationsPage/>
                </Route>

                <Route exact path="/create-trip">
                    <CreateTripPage/>
                </Route>

                <Route exact path="/login">
                    <LoginPage/>
                </Route>

                <Route exact path="/painel">
                    <PainelControlPage/>
                </Route>

                <Route exact path="/subs-to-trip">
                    <SubsTripPage/>
                </Route>

                <Route exact path="/trip-details/:tripId">
                    <TripDetailsPage/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}