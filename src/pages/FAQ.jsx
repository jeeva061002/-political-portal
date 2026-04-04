import React from 'react';
import Accordion from '../components/Accordion';

const FAQ = () => {
  const faqItems = [
    {
      question: "How can I join the Nam Tamilar ?",
      answer: "You can easily join our party by visiting the 'Join Membership' page on our website. You can sign up using your Google account or by filling out the online registration form. Once registered, your district secretary will contact you."
    },
    {
      question: "Is there any membership fee?",
      answer: "No, the basic membership of Makkal Katchi is absolutely free. We believe that political participation should not have any financial barriers."
    },
    {
      question: "What is the party's stance on education in Tamil Nadu?",
      answer: "We strongly advocate for free, high-quality public education. We plan to allocate 15% of the state budget to modernize government schools and provide free higher education for girl students across all disciplines."
    },
    {
      question: "How can I volunteer for the party programs?",
      answer: "Visit our 'Programs' page to see all active initiatives. You can click on 'Volunteer for this' under any program you are interested in. Your local coordinator will reach out to schedule your participation."
    },
    {
      question: "Who leads the district committees?",
      answer: "Each district committee is led by democratically elected District Secretaries. You can find the contact information of your respective district leader on our 'District Committees' page."
    },
    {
      question: "Does the party have a youth wing?",
      answer: "Yes, 'Ilaignar Ezhuchi' (Youth Rising) is our highly active youth wing. Anyone between the ages of 18 and 35 can join the youth wing and participate in our state-wide campaigns."
    }
  ];

  return (
    <div className="faq-page pb-5">
      <div className="page-header bg-black text-white text-center py-5">
        <h1 className="tamil-text pt-4">பொதுவான கேள்விகள்</h1>
        <h2 className="mb-2">Frequently Asked Questions</h2>
        <div className="divider mt-3 mx-auto"></div>
      </div>

      <div className="container mt-5 pt-3 mb-5">
        <div className="text-center mb-5 max-w-800 mx-auto">
          <p className="lead text-gray">
            Find answers to common questions about our party's ideology, membership process, and ongoing programs.
          </p>
        </div>

        <Accordion items={faqItems} />

        <div className="text-center mt-5 pt-4">
          <p className="text-gray mb-3">Still have questions?</p>
          <a href="/contact" className="btn btn-primary">Contact Us Directly</a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
