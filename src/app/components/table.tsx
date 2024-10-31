import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ComparisonTable() {
  return (
    <div className="hidden md:block mx-24">
      <h2 className="text-2xl uppercase mt-20 py-2  leading-tight  text-center text-white sm:text-4xl lg:text-3xl">
        Why choose Get Funds
      </h2>
      <div className="container mx-auto mt-5 rounded-lg py-10 bg-black  text-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3 text-xl text-white uppercase">
                Going Direct
              </TableHead>
              <TableHead className="w-1/3 text-xl text-white uppercase">
                Broker With Multiple Funder
              </TableHead>
              <TableHead className="w-1/3 text-xl  uppercase text-green-500">
                Why we are better
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Limited to one set of products and terms.</TableCell>
              <TableCell>
                Access to a wide range of products and terms
              </TableCell>
              <TableCell>
                <p className="text-green-500">
                  More flexibility and options to match your needs
                </p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Approval rate is based on one funder&apos;s criteria
              </TableCell>
              <TableCell>
                Higher approval rates by shopping around multiple funders
              </TableCell>
              <TableCell>
                <p className="text-green-500">
                  Increases chances of approval by finding the right match
                </p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Funding costs are Fixed by the single funder
              </TableCell>
              <TableCell>
                Competitive pricing by comparing different funders
              </TableCell>
              <TableCell>
                <p className="text-green-500">
                  Potentially lower rates by comparing offers
                </p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Speed depends on one funder&apos;s process</TableCell>
              <TableCell>
                Faster funding by finding the quickest funder available
              </TableCell>
              <TableCell>
                <p className="text-green-500">
                  Ability to choose the fastest options
                </p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Limited customisation based on one funder&apos;s products and
                mandates
              </TableCell>
              <TableCell>
                Highly tailored solutions by mixing and matching funderss
              </TableCell>
              <TableCell>
                <p className="text-green-500">
                  More Personalised funding solutions
                </p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Limited leverage to negotiating terms</TableCell>
              <TableCell>
                Broker can negotiate better terms with multiple funders
              </TableCell>
              <TableCell>
                <p className="text-green-500">
                  Increased negotiation power through our volumes and network
                </p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Market knowledge limited to one funder&apos;s expertise
              </TableCell>
              <TableCell>
                Brokers provide market insight across multiple funders
              </TableCell>
              <TableCell>
                <p className="text-green-500">
                  Access to broader market knowledge and advice
                </p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-center items-center my-12">
        <a
          href="https://apply.getfunds.co.za?broker=getfunds"
          title=""
          className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-80 focus:opacity-80"
          role="button"
        >
          {" "}
          Get Funds Now{" "}
        </a>
      </div>
    </div>
  );
}
