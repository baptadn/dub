import BlurImage from "@/components/shared/blur-image";

export default function NoProjectsPlaceholder({
  setShowAddProjectModal,
}: {
  setShowAddProjectModal: (show: boolean) => void;
}) {
  return (
    <div className="border border-gray-200 rounded-md bg-white py-12 flex flex-col justify-center items-center">
      <h2 className="text-xl font-semibold text-gray-700 z-10">
        You don't have any projects yet!
      </h2>
      <BlurImage
        src="/static/illustrations/shopping-call.svg"
        alt="No links yet"
        width={400}
        height={400}
        className="-my-8"
      />
      <button
        onClick={() => setShowAddProjectModal(true)}
        className="text-gray-500 hover:border-black dark:hover:border-white active:scale-95 font-medium text-sm px-5 py-2 border rounded-md border-gray-200 dark:border-gray-600 transition-all duration-75 z-10"
      >
        Create a project
      </button>
    </div>
  );
}