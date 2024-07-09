import AppointmentForm from "@/components/forms/AppointmentForm"
import PatientForm from "@/components/forms/AppointmentForm"
import { getPatient, getUser } from "@/lib/actions/patient.actions";
import { Link } from "lucide-react"
import Image from "next/image"
import * as Sentry from '@sentry/nextjs'

export default async function NewAppointment({ params: { userId } }: SearchParamProps) {

  const patient = await getPatient(userId);
  Sentry.metrics.set("user_view-new-appointment", patient.name);


  return (<div className="flex h-screen max-h-screen">
    {/* TODO: OTP Verification || PassKeyModal */}
    <section className="remove-scrollbar container my-auto">
      <div className="sub-container max-w-[860px] flex-1 justify-between">
        <Image src="/assets/icons/logo-full.svg"
          height={1000}
          width={1000}
          alt="patient"
          className="mb-12 h-10 w-fit"
        />
        <AppointmentForm
          type="create"
          userId={userId}
          patientId={patient.$id}
        />

        <p className="copyright mt-10 py-12">
          © 2024 CarePulse
        </p>


      </div>
    </section>
    <Image src="/assets/images/appoinTment-img.png"
      height={1000}
      width={1000}
      alt="appoinment"
      className="side-img max-w-[390px]"
    >

    </Image>

  </div >
  )
}