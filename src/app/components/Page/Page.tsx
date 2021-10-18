import React, { forwardRef, HTMLProps, ReactNode } from "react";
import { Helmet } from "react-helmet-async";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
} & HTMLProps<HTMLDivElement>;

const Page = forwardRef<HTMLDivElement, Props>(
  ({ children, title = "", description, ...rest }, ref) => {
    return (
      <div ref={ref as any} {...rest}>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          {/* {description && <meta name="description" content={description} />} */}
        </Helmet>
        {children}
      </div>
    );
  }
);

export default Page;
