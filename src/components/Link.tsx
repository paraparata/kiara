import {
  BaseLocationHook,
  LinkProps,
  Link as LinkW,
  LocationHook,
  useRoute,
} from 'wouter';

type LinkType<H extends BaseLocationHook = LocationHook> = (
  props: React.PropsWithChildren<LinkProps<H>>,
  context?: any
) => React.ReactElement<any, any> | null;

const Link: LinkType = ({ children, ...props }) => {
  const [isActive] = useRoute(props.href ?? '');

  return (
    <LinkW {...props}>
      <a
        style={{
          textDecoration: isActive ? 'underline' : 'none',
          textDecorationStyle: isActive ? 'wavy' : 'unset',
        }}
      >
        {children}
      </a>
    </LinkW>
  );
};

export default Link;
