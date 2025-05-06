import ContactSection from "@/components/contact/contactSection";
import Header from "@/components/Header";
import CONTACT from "@/assets/images/header/contact.png";

function ContactPage() {
  return (
    <>
      <Header page="CONTACT" image={CONTACT} />

      <ContactSection isPage />
    </>
  );
}

export default ContactPage;
