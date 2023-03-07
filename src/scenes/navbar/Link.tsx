import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
};

const Link = ({ page }: Props) => {
  const lowerCasePage = page.toLowerCase();
  return <AnchorLink>{page}</AnchorLink>;
};
