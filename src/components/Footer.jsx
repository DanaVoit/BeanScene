function FooterItem(props) {
  const links = props.links;
  const aboutItems = links.map((link) => (
    <li className="footer-inner-list-item">{link}</li>
  ));


  return (
    <div className="footer-inner">
      <h3 className="footer-inner-title">{props.title}</h3>
      <ul className="footer-inner-list">
        <a>{aboutItems}</a>
      </ul>
    </div>
  );
}

function FooterLogoItem() {
  return (
    <div className="footer-inner">
      <h3 className="footer-inner-title-logo">Bean Scene</h3>
      <p className="footer-inner-txt">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  );
}

function Footer() {
  const about = ["Menu", "Features", "News & Blogs", "Help & Supports"];
  const company = ["How we work", "Terms of service", "Pricing", "FAQ"];
  const contact = [
    "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
    "+1 202-918-2132",
    "beanscene@mail.com",
    "www.beanscene.com",
  ];

  return (
    <footer className="footer">
      <FooterLogoItem />
      <FooterItem title={"About"} links={about} />
      <FooterItem title={"Company"} links={company} />
      <FooterItem title={"Contact us"} links={contact} />
    </footer>
  );
}

export { Footer };
