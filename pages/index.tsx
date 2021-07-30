import SearchField from "../components/SearchField";
import { joinClasses } from "../utils";

const IndexPage = () => (
  <div className={joinClasses("mt-10")}>
    <SearchField />
  </div>
);

export default IndexPage;
