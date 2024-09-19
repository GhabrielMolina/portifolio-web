import { Button } from "../ui/button";
import TitleField from "../title-item";
import { socialMidiaOptions } from "@/_constants/social-midia";

const ConnectWithMeField = () => {
  return (
    <div
      id="connect-with-me"
      className="py-10 border-b border-solid border-y-destructive/15 px-5"
    >
      <TitleField title="Connect With Me" />

      <div className="flex flex-col items-center gap-5 w-full pt-5">
        {socialMidiaOptions.map((social, index) => {
          const isEmail = social.title.includes("@");
          const href = isEmail ? `mailto:${social.title}` : social.url;

          // TODO: FIX GITHUB ICON COLOR
          return (
            <Button
              key={index}
              className={`flex items-center gap-2 bg-secondary rounded-full py-1 px-3 ${social.color}`}
              asChild
            >
              <a href={href} className="w-fit">
                <img src={social.imageURL} className="w-7" />
                <p className="font-semibold text-base">{social.title}</p>
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
