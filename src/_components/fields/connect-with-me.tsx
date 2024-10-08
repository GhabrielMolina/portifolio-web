import { Button } from "../ui/button";
import TitleField from "../title-item";
import { socialMidiaOptions } from "@/_constants/social-midia";

const ConnectWithMeField = () => {
  return (
    <div
      id="connect-with-me"
      className="py-10 border-b border-solid border-y-destructive/15 w-full"
    >
      <TitleField title="Connect With Me" />

      <div className="flex flex-col items-center gap-5 w-full pt-5">
        {socialMidiaOptions.map((social, index) => {
          const isEmail = social.title.includes("@");
          const href = isEmail ? `mailto:${social.title}` : social.url;

          return (
            <Button
              key={index}
              className={`flex items-center gap-2 bg-white rounded-full py-1 px-3 hover:bg-white
              2xl:gap-3 2xl:py-7 2xl:px-5
              ${social.color}`}
              asChild
            >
              <a href={href} className="w-fit">
                <img
                  src={social.imageURL}
                  className="w-7
                  sm:w-8
                  md:w-9
                  2xl:w-12"
                />
                <p
                  className="font-semibold text-base hover:font-extrabold
                  sm:text-lg
                  md:text-xl
                  2xl:text-2xl"
                >
                  {social.title}
                </p>
              </a>
            </Button>
          );
        })}
      </div>

      <img src="" alt="" />
    </div>
  );
};

export default ConnectWithMeField;
