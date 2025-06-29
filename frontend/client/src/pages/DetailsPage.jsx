import { useTranslation } from "react-i18next";
import DetailsInfo from "../components/details/DetailsInfo";
import MentorInfo from "../components/details/MentorInfo";
import CourseDetails from "../components/details/CourseDetails";
import ApplyForm from "../components/ApplyForm";

function DetailsPage() {
  const { t } = useTranslation();

  return (
    <div>
      <DetailsInfo />
      <MentorInfo />
      <CourseDetails />
      <ApplyForm />
    </div>
  );
}

export default DetailsPage;
