import { useState } from "react";
export default function DoctorProfile() {

 
  const [name, setName] = useState("");
  const [qualification, setQualification] = useState("");
  const [gender, setGender] = useState("");
  const [exp, setExp] = useState(0); 
  const [age, setAge] = useState("");
  const [rating, setRating] = useState("");
  const [specialization, setSpecialization] = useState("");

  const onNameChanged = (e) => setName(e.target.value);
  const onQualificationChanged = (e) => setQualification(e.target.value);
  const onGenderChanged = (e) => setGender(e.target.value);
  const onExpChanged = (e) => setExp(parseInt(e.target.value)); 
  const onAgeChanged = (e) => setAge(e.target.value);
  const onRatingChanged = (e) => setRating(e.target.value);
  const onSpecializationChanged = (e) => setSpecialization(e.target.value);


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-green-400">
            Edit Doctor Form
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="doctorName" className="block text-sm font-medium leading-6 text-green-400">
                  Doctor Name:
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="doctorName"
                  name="doctorName"
                  type="text"
                  autoComplete="current-doctorName"
                  required
                  placeholder="Name"
                  value={name}
                  onChange={onNameChanged}
                  className="block w-full rounded-md border-0 py-1.5 text-black-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="doctorAge" className="block text-sm font-medium leading-6 text-green-400">
                  Age
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="doctorAge"
                  name="doctorAge"
                  type="text"
                  placeholder="age"
                  value={age}
                  onChange={onAgeChanged}
                  autoComplete="current-doctorAge"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-black-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="doctorSpecialization" className="block text-sm font-medium leading-6 text-green-400">
                  Gender:
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="doctorSpecialization"
                  name="doctorSpecialization"
                  type="text"
                  autoComplete="current-doctorSpecialization"
                  required
                  placeholder="Specialization"
                  value={gender}
                  onChange={onGenderChanged}
                  className="block w-full rounded-md border-0 py-1.5 text-black-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="doctorQualification" className="block text-sm font-medium leading-6 text-green-400">
                  Qualification:
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="doctorQualification"
                  name="doctorQualification"
                  type="text"
                  autoComplete="current-doctorQualification"
                  required
                  placeholder="Qualification"
                  value={qualification}
                  onChange={onQualificationChanged}
                  className="block w-full rounded-md border-0 py-1.5 text-black-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
            <div className="flex items-center justify-between">
              <label htmlFor="doctorSpecialization" className="block text-sm font-medium leading-6 text-green-400">
                Specialization:
              </label>
            </div>
            <div className="mt-2">
              <input
                id="doctorSpecialization"
                name="doctorSpecialization"
                type="text"
                autoComplete="current-doctorSpecialization"
                required
                placeholder="Specialization"
                value={specialization}
                onChange={onSpecializationChanged}
                className="block w-full rounded-md border-0 py-1.5 text-black-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="doctorExperience" className="block text-sm font-medium leading-6 text-green-400">
                  Experience:
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="doctorExperience"
                  name="doctorExperience"
                  type="number"
                  autoComplete="current-doctorExperience"
                  required
                  placeholder="Experience"
                  value={exp}
                  onChange={onExpChanged}
                  className="block w-full rounded-md border-0 py-1.5 text-black-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="doctorRating" className="block text-sm font-medium leading-6 text-green-400">
                  Rating:
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="doctorRating"
                  name="doctorRating"
                  type="text"
                  autoComplete="current-doctorRating"
                  required
                  placeholder="rating"
                  value={rating}
                  onChange={onRatingChanged}
                  className="block w-full rounded-md border-0 py-1.5 text-black-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={onSaveDoctor}
                disabled={!canSave}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  ) 
}