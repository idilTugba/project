import {
  socialMediaLinks,
  socialMediaLinksInterface,
} from "@/lib/data/socialLinks";

interface SocialTypes {
  componentsClass?: string;
  textSize?: string;
}

export default function Socials({ componentsClass, textSize }: SocialTypes) {
  return (
    <>
      {socialMediaLinks.map((link: socialMediaLinksInterface) => (
        <a
          key={link.id}
          className={componentsClass ? componentsClass : ""}
          href={link.href}
        >
          <i className={`${link.iconClassName} ${textSize}`}></i>
        </a>
      ))}
    </>
  );
}
