import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import ReactMarkdown from "react-markdown"

interface AnalysisResult {
  angles: { A: number; B: number; C: number }
  distances: { "A-B": number; "B-C": number; "C-A": number }
  classification: string
  area: number
  perimeter: number
  processed_image: string
  explanation: string
}

export default function OutputDisplay({ result }: { result: AnalysisResult }) {
  return (
    <Card className="w-full max-w-[800px] bg-white">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">Analysis Result</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Processed Image</h3>
          <img
            src={`data:image/jpeg;base64,${result.processed_image}`}
            alt="Analyzed Triangle"
            className="w-full max-w-[600px] mx-auto"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Classification</h3>
          <p>{result.classification}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Measurements</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Measurement</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Area</TableCell>
                <TableCell>{result.area.toFixed(2)} sq cm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Perimeter</TableCell>
                <TableCell>{result.perimeter.toFixed(2)} cm</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Angles</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Angle</TableHead>
                <TableHead>Degrees</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.entries(result.angles).map(([angle, value]) => (
                <TableRow key={angle}>
                  <TableCell>{angle}</TableCell>
                  <TableCell>{value.toFixed(2)}°</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Side Lengths</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Side</TableHead>
                <TableHead>Length (cm)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.entries(result.distances).map(([side, value]) => (
                <TableRow key={side}>
                  <TableCell>{side}</TableCell>
                  <TableCell>{value.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Explanation</h3>
          <ReactMarkdown className="prose">{result.explanation}</ReactMarkdown>
        </div>
      </CardContent>
    </Card>
  )
}

