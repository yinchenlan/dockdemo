import React, { useState } from 'react';
import { useRouter } from 'next/router';

import ObtainFlow from '../../components/obtain-flow';
import ObtainQRDisplay from '../../components/obtain-qr';

const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  process.env.NEXT_PUBLIC_VERCEL_URL ||
  'http://localhost:3000';

export default function ObtainEmployeeID() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const credentialSteps = [
    {
      title: 'Intuit Reseller',
      description: (
        <>
          You have been approved as an Intuit Reseller.
          <br />
          You can use this credential to make purchases at Intuit on behalf of PAX8.
        </>
      ),
      nextBtn: true,
    },
    {
      title: 'Intuit Reseller',
      description: (
        <>
          Scan the QR code below or click the deep link if you are on a mobile device to obtain your
          credential.
          <br />
          <br />
        </>
      ),
      children: <ObtainQRDisplay value={`${SERVER_URL}/api/issue?type=employeeId`} />,
      btnText: 'Got it, take me back!',
      onClick: () => {
        router.push('/dashboard');
      },
    },
  ];

  return <ObtainFlow {...{ step, setStep, credentialSteps }} />;
}
