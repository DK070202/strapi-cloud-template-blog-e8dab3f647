import type { Schema, Struct } from '@strapi/strapi';

export interface FaqsFaqs extends Struct.ComponentSchema {
  collectionName: 'components_faqs_faqs';
  info: {
    displayName: 'faqs';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface FooterLinksFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_links_footer_links';
  info: {
    displayName: 'footerLinks';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface NavLinkNavLink extends Struct.ComponentSchema {
  collectionName: 'components_nav_link_nav_links';
  info: {
    displayName: 'navLink';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface NavLinkNavlink extends Struct.ComponentSchema {
  collectionName: 'components_nav_link_navlinks';
  info: {
    displayName: 'navlink';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface NavLinksNavLinks extends Struct.ComponentSchema {
  collectionName: 'components_nav_links_nav_links';
  info: {
    displayName: 'navLinks';
  };
  attributes: {};
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface TagsTags extends Struct.ComponentSchema {
  collectionName: 'components_tags_tags';
  info: {
    displayName: 'tags';
  };
  attributes: {
    tag: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'faqs.faqs': FaqsFaqs;
      'footer-links.footer-links': FooterLinksFooterLinks;
      'nav-link.nav-link': NavLinkNavLink;
      'nav-link.navlink': NavLinkNavlink;
      'nav-links.nav-links': NavLinksNavLinks;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'tags.tags': TagsTags;
    }
  }
}
