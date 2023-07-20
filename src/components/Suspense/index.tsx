import { PropsWithChildren, Suspense } from "react";
import Loading from "../Loading";

const AappSuspense = (props: PropsWithChildren) => {
  return <Suspense fallback={<Loading />}>{props.children}</Suspense>;
};

export default AappSuspense;