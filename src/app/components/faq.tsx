"use client";
import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <div className="mt-10 text-slate-300">
      <div className="px-6 md:px-20 pt-8">
        <h1 className="font-semibold text-[42px] mb-5 leading-tight">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="flex flex-col md:flex-row md:px-20 md:gap-10">
        <div className="w-full md:w-1/2 mt-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What is a Merchant Cash Advance?
              </AccordionTrigger>
              <AccordionContent>
                A Merchant Cash Advance is an unsecured turnover lending
                solution. Its a cash advance leveraged against business revenue
                and paid over short terms. Its purpose is to unlock working
                capital quickly and accessibly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Is a Merchant Cash Advance Shariah complient?
              </AccordionTrigger>
              <AccordionContent>
                Merchant Cash Advances are structured legally as buy-and-sell
                agreements of future revenue, not loans. Therefore, the cost is
                considered a discount on revenue rather than interest, making it
                Shariah compliant. Some of our funders are Shariah certified.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>What are the repayment terms?</AccordionTrigger>
              <AccordionContent>
                getfunds works with multiple funders, offering a wide range of
                short-term solutions. The average deal terms range between 3-10
                months, but we can arrange facilities for 10 to 24 months as
                well.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                Can I get funding is I am blacklisted?
              </AccordionTrigger>
              <AccordionContent>Unfortunatley, not.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-full md:w-1/2 md:mt-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What happens if I cannot afford the repayments?
              </AccordionTrigger>
              <AccordionContent>
                Funders are usually willing to negotiate lower repayments during
                tough times, provided theres open communication and a
                willingness to repay.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How much does it cost?</AccordionTrigger>
              <AccordionContent>
                getfunds is partnered with multiple cash advance providers, so
                pricing varies. Clean to medium-risk deals cost between 2-3% per
                month, while high-risk or stacked deals cost around 3-4% per
                month.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>How does it work?</AccordionTrigger>
              <AccordionContent>
                We require minimal documentation, Once received Get funds will
                Allocate your application to the most suitable funder based on
                the best match for your needs. From start to finish can take 1-3
                days. If happy with outcome, you sign contract and receive money
                within 24hrs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                What are the Repayment methods ?
              </AccordionTrigger>
              <AccordionContent>
                Because We partnered with so many lenders, we can offer between
                3-24 months. The average deals are written on 6-10 months.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:px-20 md:gap-10">
        <div className="w-full md:w-1/2 ">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What alternatives are they to a MCA
              </AccordionTrigger>
              <AccordionContent>
                Working capital for SMEs can come from internal cash flow,
                overdrafts, family assistance, and credit cards. However, these
                alternatives are often restrictive, unavailable, or insufficient
                to meet business needs. That&apos;s where merchant cash advances
                shine.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What is the cost?</AccordionTrigger>
              <AccordionContent>
                Merchant cash advances dont operate on interest rates as they
                aren&apos;t loans. The cost is typically labeled as a fixed fee
                or markup. Pricing varies depending on risk, term, and funder
                mandates.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                What are the repayment methods?
              </AccordionTrigger>
              <AccordionContent>
                Repayment methods vary depending on the funder, ranging from
                daily, weekly, or monthly collections via debit order. We offer
                flexible terms tailored to your business&apos;s needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Do you need security?</AccordionTrigger>
              <AccordionContent>
                Merchant Cash Advances are unsecured, meaning no collateral is
                required. Your business revenue serves as the basis for the
                advance, eliminating the need for assets as security.
              </AccordionContent>
            </AccordionItem>
           
            <AccordionItem value="item-9">
              <AccordionTrigger>
                Can the repayments be deducted from a different account than the one supplied in the application?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we can do that. If we get the request in writing
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                Can the MCA be paid into a different account from the one applied to?
              </AccordionTrigger>
              <AccordionContent>
                The funders will always want to debit an account they do their
                due diligence on, they cant debit bank accounts that they havent
                scored for affordability.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>
                Can I access money if I havent been trading for less than 12 months?
              </AccordionTrigger>
              <AccordionContent>
                Merchant cash advance is not in the venture capital space. Most
                of our funders require a 12 12-month turnover track record,
                however, If the business has traded well for a few months, we
                have managed to raise funding for businesses 4 months older and
                up.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11">
              <AccordionTrigger>How long does it take?</AccordionTrigger>
              <AccordionContent>
                Once a full application is received, We have funders that take 2
                hours to approve, others up to 3 days and some 5 days, Depending
                on the urgency of the requirement please speak to a getfunds
                agent so we can advise the options. After approval is given, a
                contract can be issued and paid out within 24 hours
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-12">
              <AccordionTrigger>
                Do we take a % of card sales as a repayment?
              </AccordionTrigger>
              <AccordionContent>
                No, our funders negotiate a fixed debit order upfront, either
                daily, weekly or monthly. This debit order is a fixed repayment
                and doesnt fluctuate according to your card sales. The
                percentage of card sales repayment methods is not ideal because
                many clients historically find themselves paying the advance off
                far sooner than they thought and incur high costs on such short
                terms. Fixed debits are preferable.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-13">
              <AccordionTrigger>Are there hidden fees?</AccordionTrigger>
              <AccordionContent>
                Merchant cash advances are transparent, with any fees clearly
                outlined. Some funders may charge small administrative fees.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-13">
              <AccordionTrigger>
                Is It Wise To Move From One Funder To The Next To Get A Better
                Deal?
              </AccordionTrigger>
              <AccordionContent>
                If you get offered a better deal than your current facility, it
                is very tempting to take it, however, if it’s not a stacked
                deal, the better offer will come with the condition of settling
                your current cash advance provider. This could mean big
                penalties, and these will be massive hidden costs that will make
                changing funders potentially a very bad idea. It’s advisable to
                only consolidate your current facility if you have repaid more
                than 50% the further repaid the better. Get funds are experts in
                the industry and will help get you the best offers, and ensure
                you make the best decisions to avoid the penalties clients often
                overlook.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-14">
              <AccordionTrigger>
                What is the best use for a cash advance?
              </AccordionTrigger>
              <AccordionContent>
                Cash advances are ideally suited to short-term needs, such as
                working capital solutions, business improvements, stock
                purchases, and cash flow management.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-15">
              <AccordionTrigger>
                What happens if we can&lsquo;t afford the repayments anymore?
              </AccordionTrigger>
              <AccordionContent>
                Funders are usually willing to negotiate lower repayments during
                tough times, provided there&lsquo;s open communication and a
                willingness to repay
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-full md:w-1/2 ">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Does the funder consider credit scores?
              </AccordionTrigger>
              <AccordionContent>
                Most funders consider only business credit scores, although some
                may also look at personal credit scores. getfunds can connect
                you with funders willing to work with lower credit scores than
                traditional banks.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                How do the repeat advances work?
              </AccordionTrigger>
              <AccordionContent>
                Funders allow you to top up your facility once the active
                account is 50-70% repaid. All thats required is updated bank
                statements and a short review
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>What is the interest rate?</AccordionTrigger>
              <AccordionContent>
                Merchant cash advances don&apos;t operate on traditional
                interest rates. The cost is a fixed fee or markup, determined by
                factors like risk and term.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                Can I pay more than my schedules repayments?
              </AccordionTrigger>
              <AccordionContent>
                Unfortunately, not. However, higher repayments can be arranged
                to reduce the term of the advance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-13">
              <AccordionTrigger>
                Are there penalties for settling my cash advance to move to another provider?
              </AccordionTrigger>
              <AccordionContent>
                Early settlement may incur penalties, typically a percentage of
                the remaining fees.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>How much do I qualify for?</AccordionTrigger>
              <AccordionContent>
                Merchant cash advancing is divided into three qualifying
                mandates. Some funders qualify you for 100% of monthly revenue
                as a cash advance, some 70% and others qualify you for your
                monthly average revenue multiplied by your GP%. Please Speak to
                a getfunds broker and we will submit your application according
                to the amounts you require
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>
                Is merchant cash advancing a registered fsb?
              </AccordionTrigger>
              <AccordionContent>
                No merchant cash advising is not required; it does not provide
                personal finance and only deals with businesses that have over 1
                million rands in annual revenue or assets value. Furthermore,
                merchant cash advances are not legally a loan, its a
                buy-and-sell agreement of future receivables. So you wouldnt
                need to be a registered FSB to buy someones car or watch.
                Likewise, its not required by Merchant cash advance providers
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>
                Where does the money come from?
              </AccordionTrigger>
              <AccordionContent>
                Each of our funders has different sources of funding. Some have
                large institutional backing; some are self-funded and others
                have strong investors.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11">
              <AccordionTrigger>
                Who is getfunds partnered with?
              </AccordionTrigger>
              <AccordionContent>
                getfunds is partnered with best-in-class Merchant cash advance
                funders. We specialize in working capital solutions. We only
                deal with alternative funders, our clients prefer the speed and
                ease of our funder vs the banks and other institutional funders’
                low approvals, long turnaround times, securities and tedious
                application requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-12">
              <AccordionTrigger>What documents are required?</AccordionTrigger>
              <AccordionContent>
                Basic Information like shareholder IDs, company registration
                docs and bank statements are required. We might request
                management accounts and financials should the funders require,
                but generally the paperwork is always minimal and basic.
              </AccordionContent>
            </AccordionItem>
            




            <AccordionItem value="item-13">
              <AccordionTrigger>
                Can i get a cash advance if i already have an active advance?
              </AccordionTrigger>
              <AccordionContent>
                Yes, getfunds works with funders willing to provide additional
                funding alongside existing advances
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-14">
              <AccordionTrigger>
                Why use getfunds instead of going directly to a funder?
              </AccordionTrigger>
              <AccordionContent>
                getfunds&lsquo;s partnerships with top-tier merchant cash advance
                companies offer several advantages, including better terms,
                quicker processing, and higher approval rates. Instead of using
                Google when you need funds use a getfunds broker to get:
                <ul>
                  <li>Free Service</li>
                  <li>Correct funder match first time</li>
                  <li>We do all the work</li>
                  <li>Much quicker</li>
                  <li>Better Terms and price</li>
                  <li>We boast the highest approval rate in South Africa</li>
                  <li>Access to all the top funders</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-15">
              <AccordionTrigger>Can I get payment holidays?</AccordionTrigger>
              <AccordionContent>
                Some funders offer payment holidays for specific reasons, such
                as business renovations or seasonal closures
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
