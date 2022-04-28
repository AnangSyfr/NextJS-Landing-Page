import ButtonHeader from "./ButtonHeader";
import Field from "./Field";

const ContactForm = () => {
    return (
        <>
            <Field
                label="Fullname"
                type="text"
                name="fullname"
                className="input-shadow"
            />
            <Field
                label="Email"
                type="text"
                name="email"
                className="input-shadow"
            />
            <Field
                label="Message"
                type="textarea"
                name="message"
                className="input-shadow"
            />
            <div className="mt-5">
                <ButtonHeader variant="black">Submit</ButtonHeader>
            </div>
        </>
    );
};

export default ContactForm;
