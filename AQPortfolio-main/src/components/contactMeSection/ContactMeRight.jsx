import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src="https://res.cloudinary.com/dnk1sml4q/image/upload/v1739441235/zjf0y4qjexdxhuclxwfv.png"
        alt="email image"
        className="max-w-[300px]"
      />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
