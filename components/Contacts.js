import ContactItem from "./ContactItem";
import ContactForm from "./ContactForm";

const Contacts = () => {
    return (
        <section id="contacts" className="py-24 bg-skills  px-10 2xl:px-0">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold text-center">Contacts</h1>
                <div className="flex flex-wrap md:w-12/12 lg:w-10/12 mx-auto">
                    <div className="md:w-6/12 w-full md:px-5 lg:px-10 my-10">
                        <h1>Contact me at : </h1>
                        <div className="mt-5">
                            <ContactItem
                                icon="./mail.png"
                                title="Mail"
                                subtitle="anangsyaifur@gmail.com"
                            />
                            <ContactItem
                                icon="./phone.png"
                                title="Phone"
                                subtitle="0895412614244"
                            />
                            <ContactItem
                                icon="./facebook.png"
                                title="Facebook"
                                subtitle="anang.syfr"
                            />
                        </div>
                    </div>
                    <div className="md:w-6/12 w-full md:px-5 lg:px-10 my-10">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
