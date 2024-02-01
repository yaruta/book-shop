import { useNavigate } from "react-router-dom";
import classes from './UserInformation.module.css';
import UserInfomationForm from "./UserInformationForm";
import CheckoutSummary from "../CheckoutSummary/CheckoutSummary";

/**
 * It is a component that collects user information and stores it in local storage until the order is fulfilled.
 */ 
const UserInfomation = () => {
    const navigate = useNavigate();
    const submitHandler = (event) => {
        event.preventDefault(); 
        const userData = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            address: {
                street: event.target.street.value,
                houseNumber: event.target.houseNumber.value,
                postcode: event.target.postcode.value,
                city: event.target.city.value
            },
            email: event.target.email.value
        };
        localStorage.setItem("user-info", JSON.stringify(userData));
        navigate("/checkout/payment")
    };
    return <section className={classes.checkoutContent }>
        <UserInfomationForm onSubmit={submitHandler}/>
        <CheckoutSummary/>
    </section>
};

export default UserInfomation;
