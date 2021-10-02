// server.js
const compression = require("compression");
const express = require("express");
const app = express();
const zlib = require("zlib");

// Compress all HTTP responses
app.use(compression());

app.get("/", (req, res) => {
  const animal = "elephant";
  // It will repeatedly send the word 'elephant' in a
  // 'text/html' format file
  const fhir = {
    fhirResource: {
      resourceType: "Bundle",
      type: "batch",
      entry: [
        {
          fullUrl: "urn:uuid:8507be52-5f48-3975-9f61-06636141a7d4",
          resource: {
            resourceType: "Composition",
            id: "8507be52-5f48-3975-9f61-06636141a7d4",
            identifier: {
              use: "official",
              value: "1.2.840.114350.1.13.362.2.7.8.688883.206860700",
            },
            status: "final",
            type: {
              coding: [
                {
                  code: "34133-9",
                  display: "Summarization of Episode Note",
                  system: "http://loinc.org",
                },
              ],
            },
            date: "2019-11-14T19:19:42.000Z",
            title: "Clinical Summary",
            confidentiality: "N",
            event: [
              {
                period: {
                  start: "1984-01-01",
                },
              },
            ],
            section: [
              {
                title: "Allergies",
                text: {
                  status: "generated",
                  div:
                    '<div xmlns="http://www.w3.org/1999/xhtml">Allergies</div>',
                },
                code: {
                  coding: [
                    {
                      code: "48765-2",
                      display: "Allergies and adverse reactions Document",
                      system: "http://loinc.org",
                    },
                  ],
                },
                mode: "snapshot",
                entry: [
                  {
                    reference:
                      "AllergyIntolerance/dc4d2687-bed0-33fc-a5b2-377f212c9b7a",
                  },
                ],
              },
              {
                title: "Medications",
                text: {
                  status: "generated",
                  div:
                    '<div xmlns="http://www.w3.org/1999/xhtml">Medications</div>',
                },
                code: {
                  coding: [
                    {
                      code: "10160-0",
                      display: "History of Medication use Narrative",
                      system: "http://loinc.org",
                    },
                  ],
                },
                mode: "snapshot",
                entry: [
                  {
                    reference:
                      "MedicationStatement/4196530a-fcff-3fa0-951c-bf333dcb646f",
                  },
                  {
                    reference:
                      "MedicationStatement/d64d19bf-c862-3558-9e79-c20825052e3a",
                  },
                  {
                    reference:
                      "MedicationStatement/1207d3a6-bafd-3d82-a911-5d98d55d90c5",
                  },
                ],
              },
              {
                title: "Active Problems",
                text: {
                  status: "generated",
                  div:
                    '<div xmlns="http://www.w3.org/1999/xhtml">Active Problems</div>',
                },
                code: {
                  coding: [
                    {
                      code: "11450-4",
                      display: "Problem list - Reported",
                      system: "http://loinc.org",
                    },
                  ],
                },
                mode: "snapshot",
                entry: [
                  {
                    reference: "Condition/f6c589e3-106a-3f01-8eac-654fc7ea2279",
                  },
                  {
                    reference: "Condition/0e0d60bb-0430-32cf-8117-6dc4bee20fa2",
                  },
                  {
                    reference: "Condition/1ffeefce-d6ca-37fe-b115-59e98da5434c",
                  },
                  {
                    reference: "Condition/25787aba-e8d2-3a32-9d9b-e434d39c0a16",
                  },
                ],
              },
              {
                title: "Resolved Problems",
                text: {
                  status: "generated",
                  div:
                    '<div xmlns="http://www.w3.org/1999/xhtml">Resolved Problems</div>',
                },
                code: {
                  coding: [
                    {
                      code: "11348-0",
                      display: "HISTORY OF PAST ILLNESS",
                      system: "http://loinc.org",
                    },
                  ],
                },
                mode: "snapshot",
              },
              {
                title: "Encounters",
                text: {
                  status: "generated",
                  div:
                    '<div xmlns="http://www.w3.org/1999/xhtml">Encounters</div>',
                },
                code: {
                  coding: [
                    {
                      code: "46240-8",
                      display: "History of encounters",
                      system: "http://loinc.org",
                    },
                  ],
                },
                mode: "snapshot",
              },
              {
                title: "Immunizations",
                text: {
                  status: "generated",
                  div:
                    '<div xmlns="http://www.w3.org/1999/xhtml">Immunizations</div>',
                },
                code: {
                  coding: [
                    {
                      code: "11369-6",
                      display: "History of Immunization Narrative",
                      system: "http://loinc.org",
                    },
                  ],
                },
                mode: "snapshot",
                entry: [
                  {
                    reference:
                      "Immunization/3e4ef699-472e-39f1-ae7a-342daa50dea3",
                  },
                ],
              },
              {
                title: "Family History",
                text: {
                  status: "generated",
                  div:
                    '<div xmlns="http://www.w3.org/1999/xhtml">Family History</div>',
                },
                code: {
                  coding: [
                    {
                      code: "10157-6",
                      display: "Family History",
                      system: "http://loinc.org",
                    },
                  ],
                },
                mode: "snapshot",
                entry: [
                  {
                    reference:
                      "FamilyMemberHistory/545cc723-e38e-36e1-b7e8-566019e5b2fb",
                  },
                  {
                    reference:
                      "FamilyMemberHistory/537fca8b-f3dd-3fcd-9a47-5f56a20e33dd",
                  },
                ],
              },
              {
                title: "Social History",
                text: {
                  status: "generated",
                  div:
                    '<div xmlns="http://www.w3.org/1999/xhtml">Social History</div>',
                },
                code: {
                  coding: [
                    {
                      code: "29762-2",
                      display: "Social history Narrative",
                      system: "http://loinc.org",
                    },
                  ],
                },
                mode: "snapshot",
                entry: [
                  {
                    reference:
                      "Observation/c89eb2b1-64b3-3439-ad17-372dfb761a70",
                    display: "Tobacco smoking status NHIS",
                  },
                  {
                    reference:
                      "Observation/2a3cc7d8-e57f-31e6-8a6d-4f4ba6b111d2",
                    display: "History of Alcohol Use",
                  },
                  {
                    reference:
                      "Observation/07971bd1-85c5-3008-a73f-6cdfc2a749d3",
                    display: "History SDOH Alcohol Frequency",
                  },
                  {
                    reference:
                      "Observation/64dc7285-cefd-3af0-b86e-0a40857b8090",
                    display: "History SDOH Alcohol Std Drinks",
                  },
                  {
                    reference:
                      "Observation/8c42160f-26fe-3065-bbe9-35b19acb80f6",
                    display: "History SDOH Alcohol Binge",
                  },
                  {
                    reference:
                      "Observation/50f5fde8-45f3-3b4c-8030-db6dc8e356fc",
                    display: "Sex Assigned At Birth",
                  },
                ],
              },
              {
                title: "Last Filed Vital Signs",
                text: {
                  status: "generated",
                  div:
                    '<div xmlns="http://www.w3.org/1999/xhtml">Last Filed Vital Signs</div>',
                },
                code: {
                  coding: [
                    {
                      code: "8716-3",
                      display: "Vital signs",
                      system: "http://loinc.org",
                    },
                  ],
                },
                mode: "snapshot",
                entry: [
                  {
                    reference:
                      "Observation/65e952f2-f709-34a2-900c-e1b869f64d73",
                    display: "Body height",
                  },
                  {
                    reference:
                      "Observation/f8880ea7-a01b-3b69-8cd2-2de6b5bc9067",
                    display: "Systolic blood pressure",
                  },
                  {
                    reference:
                      "Observation/41cffbfe-2526-3ec0-a701-89c5d099a0b0",
                    display: "Diastolic blood pressure",
                  },
                  {
                    reference:
                      "Observation/1241b21b-9c75-33a5-99cf-c9e3131fe70b",
                    display: "Heart rate",
                  },
                  {
                    reference:
                      "Observation/b90e95c7-bdb3-325a-81fa-4ed804fd9f01",
                    display: "Body temperature",
                  },
                  {
                    reference:
                      "Observation/7b631c85-638a-3be6-bd86-62a62b0414c0",
                    display: "Respiratory rate",
                  },
                  {
                    reference:
                      "Observation/b1ba9113-728f-33ce-99ee-c5a28e5f662a",
                    display:
                      "Oxygen saturation in Arterial blood by Pulse oximetry",
                  },
                  {
                    reference:
                      "Observation/a34ed2f4-16aa-31e1-8269-5c6cad48f7a4",
                    display: "Body weight",
                  },
                  {
                    reference:
                      "Observation/286a04c4-61c0-3979-8065-fbcce25cda0c",
                    display: "BMI",
                  },
                ],
              },
              {
                title: "Plan of Treatment",
                text: {
                  status: "generated",
                  div:
                    '<div xmlns="http://www.w3.org/1999/xhtml">Plan of Treatment</div>',
                },
                code: {
                  coding: [
                    {
                      code: "18776-5",
                      display: "Plan of care note",
                      system: "http://loinc.org",
                    },
                  ],
                },
                mode: "snapshot",
                entry: [
                  {
                    reference: "CarePlan/4a4f965c-db23-3e10-a963-e32ae21d4d06",
                  },
                  {
                    reference: "CarePlan/3741b693-0f99-398c-bd9f-a9f57079b830",
                  },
                  {
                    reference: "CarePlan/418019f1-0a8b-33c5-a585-de868676a157",
                  },
                  {
                    reference: "CarePlan/d36792a6-aca0-3d8c-bc95-a5f16058509f",
                  },
                  {
                    reference: "CarePlan/e8b8a4d3-484f-3f32-9fbe-0b9dfc38baca",
                  },
                  {
                    reference: "CarePlan/d5cd40c4-59a9-3a13-9e8b-1084d31a8c01",
                  },
                ],
              },
              {
                title: "Goals",
                text: {
                  status: "generated",
                  div: '<div xmlns="http://www.w3.org/1999/xhtml">Goals</div>',
                },
                code: {
                  coding: [
                    {
                      code: "61146-7",
                      display: "Goals",
                      system: "http://loinc.org",
                    },
                  ],
                },
                mode: "snapshot",
              },
              {
                title: "Implants",
                text: {
                  status: "generated",
                  div:
                    '<div xmlns="http://www.w3.org/1999/xhtml">Implants</div>',
                },
                code: {
                  coding: [
                    {
                      code: "46264-8",
                      display: "History of medical device use",
                      system: "http://loinc.org",
                    },
                  ],
                },
                mode: "snapshot",
              },
              {
                title: "Procedures",
                text: {
                  status: "generated",
                  div:
                    '<div xmlns="http://www.w3.org/1999/xhtml">Procedures</div>',
                },
                code: {
                  coding: [
                    {
                      code: "47519-4",
                      display: "History of Procedures Document",
                      system: "http://loinc.org",
                    },
                  ],
                },
                mode: "snapshot",
              },
              {
                title: "Results",
                text: {
                  status: "generated",
                  div:
                    '<div xmlns="http://www.w3.org/1999/xhtml">Results</div>',
                },
                code: {
                  coding: [
                    {
                      code: "30954-2",
                      display:
                        "Relevant diagnostic tests/laboratory data Narrative",
                      system: "http://loinc.org",
                    },
                  ],
                },
                mode: "snapshot",
              },
              {
                title: "Additional Health Concerns",
                text: {
                  status: "generated",
                  div:
                    '<div xmlns="http://www.w3.org/1999/xhtml">Additional Health Concerns</div>',
                },
                code: {
                  coding: [
                    {
                      code: "75310-3",
                      display: "Health concerns Document",
                      system: "http://loinc.org",
                    },
                  ],
                },
                mode: "snapshot",
              },
              {
                title: "Insurance",
                text: {
                  status: "generated",
                  div:
                    '<div xmlns="http://www.w3.org/1999/xhtml">Insurance</div>',
                },
                code: {
                  coding: [
                    {
                      code: "48768-6",
                      display: "Payment sources",
                      system: "http://loinc.org",
                    },
                  ],
                },
                mode: "snapshot",
                entry: [
                  {
                    reference: "Coverage/fe836be2-ae2b-3bde-b6ef-049ff994cc61",
                  },
                ],
              },
              {
                title: "Advance Directives",
                text: {
                  status: "generated",
                  div:
                    '<div xmlns="http://www.w3.org/1999/xhtml">Advance Directives</div>',
                },
                code: {
                  coding: [
                    {
                      code: "42348-3",
                      display: "Advance Directives",
                      system: "http://loinc.org",
                    },
                  ],
                },
                mode: "snapshot",
                entry: [
                  {
                    reference: "Consent/fd8f3310-4f8c-39b4-9535-908ed03d3412",
                  },
                ],
              },
              {
                title: "Additional Source Comments",
                text: {
                  status: "generated",
                  div:
                    '<div xmlns="http://www.w3.org/1999/xhtml">Additional Source Comments</div>',
                },
                code: {
                  coding: [
                    {
                      code: "X-DOCCMTADDL",
                      display: "Additional Document Comments",
                      system: "urn:oid:1.2.840.114350.1.72.2",
                    },
                  ],
                },
                mode: "snapshot",
              },
            ],
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
            custodian: {
              reference: "Organization/20619850-f4d1-316e-b678-6479bd0452eb",
            },
            author: [
              {
                reference: "Device/1b47d8d6-5540-35b9-8b08-dbaada48deb4",
              },
              {
                reference: "Practitioner/67527efe-5e34-39a0-b9b2-0a4b9687b8df",
              },
            ],
          },
          request: {
            method: "PUT",
            url: "Composition/8507be52-5f48-3975-9f61-06636141a7d4",
          },
        },
        {
          fullUrl: "urn:uuid:20619850-f4d1-316e-b678-6479bd0452eb",
          resource: {
            resourceType: "Organization",
            id: "20619850-f4d1-316e-b678-6479bd0452eb",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.2.688879",
                value: "30600",
              },
            ],
            name: "HealthCare Org",
          },
          request: {
            method: "PUT",
            url: "Organization/20619850-f4d1-316e-b678-6479bd0452eb",
          },
        },
        {
          fullUrl: "urn:uuid:1b47d8d6-5540-35b9-8b08-dbaada48deb4",
          resource: {
            resourceType: "Device",
            id: "1b47d8d6-5540-35b9-8b08-dbaada48deb4",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.1",
                value: "8.7",
              },
            ],
            type: {
              coding: [
                {
                  display: "Epic - Version 8.7",
                },
              ],
            },
            manufacturer: "Epic - Version 8.7",
            version: [
              {
                value: "Epic - Version 8.7",
              },
            ],
            owner: {
              reference: "Organization/20619850-f4d1-316e-b678-6479bd0452eb",
            },
          },
          request: {
            method: "PUT",
            url: "Device/1b47d8d6-5540-35b9-8b08-dbaada48deb4",
          },
        },
        {
          fullUrl: "urn:uuid:67527efe-5e34-39a0-b9b2-0a4b9687b8df",
          resource: {
            resourceType: "Practitioner",
            meta: {
              profile: [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner",
              ],
            },
            id: "67527efe-5e34-39a0-b9b2-0a4b9687b8df",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.1",
                value: "8.7",
              },
            ],
          },
          request: {
            method: "PUT",
            url: "Practitioner/67527efe-5e34-39a0-b9b2-0a4b9687b8df",
          },
        },
        {
          fullUrl: "urn:uuid:b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
          resource: {
            resourceType: "Patient",
            meta: {
              profile: [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient",
              ],
            },
            id: "b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.3.688884.100",
                value: "PXS15786L6",
              },
            ],
            name: [
              {
                family: "Patient",
                given: ["Test"],
              },
            ],
            birthDate: "1984-01-01",
            gender: "female",
            extension: [
              {
                url:
                  "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
                extension: [
                  {
                    url: "ombCategory",
                    valueCoding: {
                      code: "2106-3",
                      display: "White",
                      system: "urn:oid:2.16.840.1.113883.6.238",
                    },
                  },
                  {
                    url: "text",
                    valueString: "White",
                  },
                ],
              },
              {
                url:
                  "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
                extension: [
                  {
                    url: "ombCategory",
                    valueCoding: {
                      code: "2186-5",
                      display: "Not Hispanic or Latino",
                      system: "urn:oid:2.16.840.1.113883.6.238",
                    },
                  },
                  {
                    url: "text",
                    valueString: "Not Hispanic or Latino",
                  },
                ],
              },
            ],
          },
          request: {
            method: "PUT",
            url: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
          },
        },
        {
          fullUrl: "urn:uuid:84fe877b-5813-3afb-bd79-4c1a5015a305",
          resource: {
            resourceType: "AllergyIntolerance",
            id: "84fe877b-5813-3afb-bd79-4c1a5015a305",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.2.768076",
                value: "65448430",
              },
            ],
            clinicalStatus: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
                  code: "active",
                },
              ],
            },
            reaction: [
              {
                manifestation: [
                  {
                    coding: [
                      {
                        code: "271807003",
                        display: "Rash",
                        system: "http://snomed.info/sct",
                      },
                    ],
                  },
                ],
                onset: "2019-02-12",
              },
            ],
            onsetDateTime: "2019-02-12",
            patient: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "AllergyIntolerance/84fe877b-5813-3afb-bd79-4c1a5015a305",
          },
        },
        {
          fullUrl: "urn:uuid:c785b6d9-a591-353f-a0a0-465d138a394c",
          resource: {
            resourceType: "Condition",
            id: "c785b6d9-a591-353f-a0a0-465d138a394c",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.2.768076",
                value: "62145771",
              },
            ],
            code: {
              coding: [
                {
                  code: "Z78.9",
                  display: "Conceived by in vitro fertilization",
                  system: "urn:oid:2.16.840.1.113883.6.90",
                },
              ],
            },
            onsetDateTime: "2019-01-02",
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "Condition/c785b6d9-a591-353f-a0a0-465d138a394c",
          },
        },
        {
          fullUrl: "urn:uuid:4cfe8d6d-3fc8-3e41-b921-f204be18db31",
          resource: {
            resourceType: "Condition",
            id: "4cfe8d6d-3fc8-3e41-b921-f204be18db31",
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "Condition/4cfe8d6d-3fc8-3e41-b921-f204be18db31",
          },
        },
        {
          fullUrl: "urn:uuid:546065f9-af08-360a-bc04-f8ce109644a6",
          resource: {
            resourceType: "Condition",
            id: "546065f9-af08-360a-bc04-f8ce109644a6",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.2.768076",
                value: "62145779",
              },
            ],
            code: {
              coding: [
                {
                  code: "O26.619",
                  display: "Cholestasis during pregnancy",
                  system: "urn:oid:2.16.840.1.113883.6.90",
                },
              ],
            },
            onsetDateTime: "2019-01-02",
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "Condition/546065f9-af08-360a-bc04-f8ce109644a6",
          },
        },
        {
          fullUrl: "urn:uuid:f95dc805-7973-3f82-8e52-47c9378b7599",
          resource: {
            resourceType: "Condition",
            id: "f95dc805-7973-3f82-8e52-47c9378b7599",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.2.768076",
                value: "62145786",
              },
            ],
            code: {
              coding: [
                {
                  code: "K80.20",
                  display: "Gall stones",
                  system: "urn:oid:2.16.840.1.113883.6.90",
                },
              ],
            },
            onsetDateTime: "2019-01-02",
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "Condition/f95dc805-7973-3f82-8e52-47c9378b7599",
          },
        },
        {
          fullUrl: "urn:uuid:c528290d-a1f0-322f-9d04-4d3956be8adb",
          resource: {
            resourceType: "Condition",
            id: "c528290d-a1f0-322f-9d04-4d3956be8adb",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.2.768076",
                value: "62145797",
              },
            ],
            code: {
              coding: [
                {
                  code: "E03.9",
                  display: "Hypothyroid",
                  system: "urn:oid:2.16.840.1.113883.6.90",
                },
              ],
            },
            onsetDateTime: "2019-01-02",
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "Condition/c528290d-a1f0-322f-9d04-4d3956be8adb",
          },
        },
        {
          fullUrl: "urn:uuid:ac79c423-20d9-3851-902a-c868df070bcb",
          resource: {
            resourceType: "FamilyMemberHistory",
            id: "ac79c423-20d9-3851-902a-c868df070bcb",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.1.1038.1",
                value: "B5CA7BD0071311EAAECFEF094F7F8D4D",
              },
            ],
            status: "completed",
            relationship: {
              coding: [
                {
                  code: "MAUNT",
                  display: "Maternal aunt",
                  system: "urn:oid:2.16.840.1.113883.5.111",
                },
              ],
            },
            sex: {
              coding: [
                {
                  code: "F",
                  display: "Female",
                  system: "urn:oid:2.16.840.1.113883.5.1",
                },
              ],
            },
            patient: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "FamilyMemberHistory/ac79c423-20d9-3851-902a-c868df070bcb",
          },
        },
        {
          fullUrl: "urn:uuid:dfa8ea0c-482f-3870-a879-f4d7f81451b9",
          resource: {
            resourceType: "FamilyMemberHistory",
            id: "dfa8ea0c-482f-3870-a879-f4d7f81451b9",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.1.1038.1",
                value: "B5CAB2B2071311EAAECFEF094F7F8D4D",
              },
            ],
            status: "completed",
            relationship: {
              coding: [
                {
                  code: "MGRMTH",
                  display: "Maternal grandmother",
                  system: "urn:oid:2.16.840.1.113883.5.111",
                },
              ],
            },
            sex: {
              coding: [
                {
                  code: "F",
                  display: "Female",
                  system: "urn:oid:2.16.840.1.113883.5.1",
                },
              ],
            },
            condition: [
              {
                code: {
                  coding: [
                    {
                      code: "73211009",
                      system: "http://snomed.info/sct",
                    },
                  ],
                },
              },
              {
                code: {
                  coding: [
                    {
                      code: "363358000",
                      system: "http://snomed.info/sct",
                    },
                  ],
                },
              },
            ],
            patient: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "FamilyMemberHistory/dfa8ea0c-482f-3870-a879-f4d7f81451b9",
          },
        },
        {
          fullUrl: "urn:uuid:3e4ef699-472e-39f1-ae7a-342daa50dea3",
          resource: {
            resourceType: "Immunization",
            id: "3e4ef699-472e-39f1-ae7a-342daa50dea3",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.2.768076",
                value: "63465725",
              },
            ],
            occurrenceDateTime: "2019-01-17",
            vaccineCode: {
              coding: [
                {
                  code: "115",
                  system: "urn:oid:2.16.840.1.113883.12.292",
                },
              ],
            },
            status: "completed",
            route: {
              coding: [
                {
                  code: "C28161",
                  system: "urn:oid:2.16.840.1.113883.3.26.1.1",
                },
              ],
            },
            patient: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "Immunization/3e4ef699-472e-39f1-ae7a-342daa50dea3",
          },
        },
        {
          fullUrl: "urn:uuid:46411ae7-b394-3d02-a8ea-222e14dd6392",
          resource: {
            resourceType: "MedicationStatement",
            id: "46411ae7-b394-3d02-a8ea-222e14dd6392",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.2.798268",
                value: "489869431",
              },
            ],
            status: "active",
            dosage: [
              {
                doseAndRate: [
                  {
                    doseQuantity: {
                      value: 1,
                      unit: "{tbl}",
                    },
                  },
                ],
              },
            ],
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
            medicationReference: {
              reference: "Medication/b330898f-362b-3418-95b1-9b94bf508f35",
            },
          },
          request: {
            method: "PUT",
            url: "MedicationStatement/46411ae7-b394-3d02-a8ea-222e14dd6392",
          },
        },
        {
          fullUrl: "urn:uuid:b330898f-362b-3418-95b1-9b94bf508f35",
          resource: {
            resourceType: "Medication",
            id: "b330898f-362b-3418-95b1-9b94bf508f35",
            code: {
              coding: [
                {
                  code: "57896-575-01",
                  system: "urn:oid:2.16.840.1.113883.6.69",
                },
              ],
            },
          },
          request: {
            method: "PUT",
            url: "Medication/b330898f-362b-3418-95b1-9b94bf508f35",
          },
        },
        {
          fullUrl: "urn:uuid:f29daa97-28f4-33ba-9d6d-31658c2ad970",
          resource: {
            resourceType: "MedicationRequest",
            id: "f29daa97-28f4-33ba-9d6d-31658c2ad970",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.2.798268",
                value: "489869431",
              },
            ],
            intent: "order",
            status: "completed",
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
            medicationReference: {
              reference: "Medication/b330898f-362b-3418-95b1-9b94bf508f35",
            },
          },
          request: {
            method: "PUT",
            url: "MedicationRequest/f29daa97-28f4-33ba-9d6d-31658c2ad970",
          },
        },
        {
          fullUrl: "urn:uuid:caa0a3db-34b9-35d9-b745-e594ad78ca2b",
          resource: {
            resourceType: "MedicationStatement",
            id: "caa0a3db-34b9-35d9-b745-e594ad78ca2b",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.2.798268",
                value: "506497897",
              },
            ],
            status: "active",
            dosage: [
              {
                doseAndRate: [
                  {
                    doseQuantity: {
                      value: 0.35,
                      unit: "mg",
                    },
                  },
                ],
              },
            ],
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
            medicationReference: {
              reference: "Medication/e6d34ada-926b-3d1a-946e-98d087ca66c6",
            },
          },
          request: {
            method: "PUT",
            url: "MedicationStatement/caa0a3db-34b9-35d9-b745-e594ad78ca2b",
          },
        },
        {
          fullUrl: "urn:uuid:e6d34ada-926b-3d1a-946e-98d087ca66c6",
          resource: {
            resourceType: "Medication",
            id: "e6d34ada-926b-3d1a-946e-98d087ca66c6",
            code: {
              coding: [
                {
                  code: "68462-305-29",
                  system: "urn:oid:2.16.840.1.113883.6.69",
                },
              ],
            },
          },
          request: {
            method: "PUT",
            url: "Medication/e6d34ada-926b-3d1a-946e-98d087ca66c6",
          },
        },
        {
          fullUrl: "urn:uuid:c3da8c57-625e-3f30-987e-76bf1b4d8f4c",
          resource: {
            resourceType: "MedicationRequest",
            id: "c3da8c57-625e-3f30-987e-76bf1b4d8f4c",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.2.798268",
                value: "506497897",
              },
            ],
            intent: "order",
            status: "completed",
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
            medicationReference: {
              reference: "Medication/e6d34ada-926b-3d1a-946e-98d087ca66c6",
            },
          },
          request: {
            method: "PUT",
            url: "MedicationRequest/c3da8c57-625e-3f30-987e-76bf1b4d8f4c",
          },
        },
        {
          fullUrl: "urn:uuid:d41f45f0-7b69-3714-9ece-5044c16cfdbf",
          resource: {
            resourceType: "MedicationStatement",
            id: "d41f45f0-7b69-3714-9ece-5044c16cfdbf",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.2.798268",
                value: "506497900",
              },
            ],
            status: "active",
            dosage: [
              {
                doseAndRate: [
                  {
                    doseQuantity: {
                      value: 88,
                      unit: "ug",
                    },
                  },
                ],
              },
            ],
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
            medicationReference: {
              reference: "Medication/1d9140c5-c75b-3017-aa02-f26e015fd1b5",
            },
          },
          request: {
            method: "PUT",
            url: "MedicationStatement/d41f45f0-7b69-3714-9ece-5044c16cfdbf",
          },
        },
        {
          fullUrl: "urn:uuid:1d9140c5-c75b-3017-aa02-f26e015fd1b5",
          resource: {
            resourceType: "Medication",
            id: "1d9140c5-c75b-3017-aa02-f26e015fd1b5",
            code: {
              coding: [
                {
                  code: "0527-1344-01",
                  system: "urn:oid:2.16.840.1.113883.6.69",
                },
              ],
            },
          },
          request: {
            method: "PUT",
            url: "Medication/1d9140c5-c75b-3017-aa02-f26e015fd1b5",
          },
        },
        {
          fullUrl: "urn:uuid:dc4fb253-3028-3cd7-9171-9859935929ab",
          resource: {
            resourceType: "MedicationRequest",
            id: "dc4fb253-3028-3cd7-9171-9859935929ab",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.2.798268",
                value: "506497900",
              },
            ],
            intent: "order",
            status: "completed",
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
            medicationReference: {
              reference: "Medication/1d9140c5-c75b-3017-aa02-f26e015fd1b5",
            },
          },
          request: {
            method: "PUT",
            url: "MedicationRequest/dc4fb253-3028-3cd7-9171-9859935929ab",
          },
        },
        {
          fullUrl: "urn:uuid:ee6f3654-1a19-3e41-87cf-5e965df38ce8",
          resource: {
            resourceType: "Observation",
            meta: {
              profile: [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observationresults",
              ],
            },
            id: "ee6f3654-1a19-3e41-87cf-5e965df38ce8",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.1.1040.1",
                value: "Z16682125^65107^72166-2",
              },
            ],
            category: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/observation-category",
                    code: "social-history",
                  },
                ],
              },
            ],
            status: "final",
            code: {
              coding: [
                {
                  code: "72166-2",
                  display: "Tobacco smoking status NHIS",
                  system: "http://loinc.org",
                },
              ],
            },
            effectiveDateTime: "2019-04-04",
            valueCodeableConcept: {
              coding: [
                {
                  code: "266919005",
                  display: "Never smoker",
                  system: "http://snomed.info/sct",
                },
              ],
            },
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "Observation/ee6f3654-1a19-3e41-87cf-5e965df38ce8",
          },
        },
        {
          fullUrl: "urn:uuid:33274f2f-f8d6-3d65-a383-c86ec1fa9919",
          resource: {
            resourceType: "Observation",
            meta: {
              profile: [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observationresults",
              ],
            },
            id: "33274f2f-f8d6-3d65-a383-c86ec1fa9919",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.1.1040.12",
                value: "Z16682125^56423.99^160573003",
              },
            ],
            category: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/observation-category",
                    code: "social-history",
                  },
                ],
              },
            ],
            status: "final",
            code: {
              coding: [
                {
                  code: "11331-6",
                  display: "History of Alcohol Use",
                  system: "http://loinc.org",
                },
              ],
            },
            effectiveDateTime: "2019-04-04",
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "Observation/33274f2f-f8d6-3d65-a383-c86ec1fa9919",
          },
        },
        {
          fullUrl: "urn:uuid:6a724325-6115-3915-a85b-309bc167101b",
          resource: {
            resourceType: "Observation",
            meta: {
              profile: [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observationresults",
              ],
            },
            id: "6a724325-6115-3915-a85b-309bc167101b",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.7.698084.19934",
                value: "Z16682125",
              },
            ],
            category: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/observation-category",
                    code: "social-history",
                  },
                ],
              },
            ],
            status: "final",
            code: {
              coding: [
                {
                  code: "68518-0",
                  system: "http://loinc.org",
                },
              ],
            },
            effectiveDateTime: "2018-12-07",
            valueString: "1",
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "Observation/6a724325-6115-3915-a85b-309bc167101b",
          },
        },
        {
          fullUrl: "urn:uuid:4c9da5c1-5bd0-3455-83a0-600ca26121d6",
          resource: {
            resourceType: "Observation",
            meta: {
              profile: [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observationresults",
              ],
            },
            id: "4c9da5c1-5bd0-3455-83a0-600ca26121d6",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.7.698084.19935",
                value: "Z16682125",
              },
            ],
            category: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/observation-category",
                    code: "social-history",
                  },
                ],
              },
            ],
            status: "final",
            code: {
              coding: [
                {
                  code: "68519-8",
                  system: "http://loinc.org",
                },
              ],
            },
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "Observation/4c9da5c1-5bd0-3455-83a0-600ca26121d6",
          },
        },
        {
          fullUrl: "urn:uuid:d4f8b8b8-13a0-30a3-8bce-0c38f585a020",
          resource: {
            resourceType: "Observation",
            meta: {
              profile: [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observationresults",
              ],
            },
            id: "d4f8b8b8-13a0-30a3-8bce-0c38f585a020",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.7.698084.19936",
                value: "Z16682125",
              },
            ],
            category: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/observation-category",
                    code: "social-history",
                  },
                ],
              },
            ],
            status: "final",
            code: {
              coding: [
                {
                  code: "68520-6",
                  system: "http://loinc.org",
                },
              ],
            },
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "Observation/d4f8b8b8-13a0-30a3-8bce-0c38f585a020",
          },
        },
        {
          fullUrl: "urn:uuid:68335f25-b74c-3001-95d4-88513f60b204",
          resource: {
            resourceType: "Observation",
            meta: {
              profile: [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observationresults",
              ],
            },
            id: "68335f25-b74c-3001-95d4-88513f60b204",
            category: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/observation-category",
                    code: "social-history",
                  },
                ],
              },
            ],
            status: "final",
            code: {
              coding: [
                {
                  code: "76689-9",
                  display: "Sex Assigned At Birth",
                  system: "http://loinc.org",
                },
              ],
            },
            valueCodeableConcept: {
              coding: [
                {
                  code: "F",
                  system: "urn:oid:2.16.840.1.113883.5.1",
                },
              ],
            },
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "Observation/68335f25-b74c-3001-95d4-88513f60b204",
          },
        },
        {
          fullUrl: "urn:uuid:b99f0242-d0ca-3080-a2e9-28192b2e1680",
          resource: {
            resourceType: "Observation",
            meta: {
              profile: [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observationresults",
              ],
            },
            id: "b99f0242-d0ca-3080-a2e9-28192b2e1680",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.1.2109.1",
                value: "5621232660-heightC83-Z16682125",
              },
            ],
            category: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/observation-category",
                    code: "vital-signs",
                  },
                ],
              },
            ],
            status: "final",
            code: {
              coding: [
                {
                  code: "8302-2",
                  system: "http://loinc.org",
                },
              ],
            },
            effectiveDateTime: "2019-02-16T13:31:00.000Z",
            valueQuantity: {
              value: 162.6,
              unit: "cm",
            },
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "Observation/b99f0242-d0ca-3080-a2e9-28192b2e1680",
          },
        },
        {
          fullUrl: "urn:uuid:b6ff0481-c4a8-3a7a-bd2e-c0103a941f6a",
          resource: {
            resourceType: "Observation",
            meta: {
              profile: [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observationresults",
              ],
            },
            id: "b6ff0481-c4a8-3a7a-bd2e-c0103a941f6a",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.1.2109.1",
                value: "5621493600-sysBP-Z16682125",
              },
            ],
            category: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/observation-category",
                    code: "vital-signs",
                  },
                ],
              },
            ],
            status: "final",
            code: {
              coding: [
                {
                  code: "8480-6",
                  system: "http://loinc.org",
                },
              ],
            },
            effectiveDateTime: "2019-02-19T14:00:00.000Z",
            valueQuantity: {
              value: 115,
              unit: "mm[Hg]",
            },
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "Observation/b6ff0481-c4a8-3a7a-bd2e-c0103a941f6a",
          },
        },
        {
          fullUrl: "urn:uuid:cb1e8455-cf5e-30ee-b29f-6c1df0ad6e2c",
          resource: {
            resourceType: "Observation",
            meta: {
              profile: [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observationresults",
              ],
            },
            id: "cb1e8455-cf5e-30ee-b29f-6c1df0ad6e2c",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.1.2109.1",
                value: "5621493600-diaBP-Z16682125",
              },
            ],
            category: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/observation-category",
                    code: "vital-signs",
                  },
                ],
              },
            ],
            status: "final",
            code: {
              coding: [
                {
                  code: "8462-4",
                  system: "http://loinc.org",
                },
              ],
            },
            effectiveDateTime: "2019-02-19T14:00:00.000Z",
            valueQuantity: {
              value: 78,
              unit: "mm[Hg]",
            },
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "Observation/cb1e8455-cf5e-30ee-b29f-6c1df0ad6e2c",
          },
        },
        {
          fullUrl: "urn:uuid:db2203cb-9a76-38f3-a6b9-61c69b5d0023",
          resource: {
            resourceType: "Observation",
            meta: {
              profile: [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observationresults",
              ],
            },
            id: "db2203cb-9a76-38f3-a6b9-61c69b5d0023",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.1.2109.1",
                value: "5621493600-pulse-Z16682125",
              },
            ],
            category: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/observation-category",
                    code: "vital-signs",
                  },
                ],
              },
            ],
            status: "final",
            code: {
              coding: [
                {
                  code: "8867-4",
                  system: "http://loinc.org",
                },
              ],
            },
            effectiveDateTime: "2019-02-19T14:00:00.000Z",
            valueQuantity: {
              value: 74,
              unit: "/min",
            },
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "Observation/db2203cb-9a76-38f3-a6b9-61c69b5d0023",
          },
        },
        {
          fullUrl: "urn:uuid:627c20bc-517b-3557-9ecf-2b0279c4dcdc",
          resource: {
            resourceType: "Observation",
            meta: {
              profile: [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observationresults",
              ],
            },
            id: "627c20bc-517b-3557-9ecf-2b0279c4dcdc",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.1.2109.1",
                value: "5621493600-tempC83-Z16682125",
              },
            ],
            category: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/observation-category",
                    code: "vital-signs",
                  },
                ],
              },
            ],
            status: "final",
            code: {
              coding: [
                {
                  code: "8310-5",
                  system: "http://loinc.org",
                },
              ],
            },
            effectiveDateTime: "2019-02-19T14:00:00.000Z",
            valueQuantity: {
              value: 36.61,
              unit: "Cel",
            },
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "Observation/627c20bc-517b-3557-9ecf-2b0279c4dcdc",
          },
        },
        {
          fullUrl: "urn:uuid:53501848-7eee-32b5-9125-eca72095a12a",
          resource: {
            resourceType: "Observation",
            meta: {
              profile: [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observationresults",
              ],
            },
            id: "53501848-7eee-32b5-9125-eca72095a12a",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.1.2109.1",
                value: "5621493600-resp-Z16682125",
              },
            ],
            category: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/observation-category",
                    code: "vital-signs",
                  },
                ],
              },
            ],
            status: "final",
            code: {
              coding: [
                {
                  code: "9279-1",
                  system: "http://loinc.org",
                },
              ],
            },
            effectiveDateTime: "2019-02-19T14:00:00.000Z",
            valueQuantity: {
              value: 18,
              unit: "/min",
            },
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "Observation/53501848-7eee-32b5-9125-eca72095a12a",
          },
        },
        {
          fullUrl: "urn:uuid:dd85da0e-a7b4-336c-94f7-94ac0973e426",
          resource: {
            resourceType: "Observation",
            meta: {
              profile: [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observationresults",
              ],
            },
            id: "dd85da0e-a7b4-336c-94f7-94ac0973e426",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.1.2109.1",
                value: "5621493600-SpO2-Z16682125",
              },
            ],
            category: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/observation-category",
                    code: "vital-signs",
                  },
                ],
              },
            ],
            status: "final",
            code: {
              coding: [
                {
                  code: "59408-5",
                  system: "http://loinc.org",
                },
              ],
            },
            effectiveDateTime: "2019-02-19T14:00:00.000Z",
            valueQuantity: {
              value: 98,
              unit: "%",
            },
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "Observation/dd85da0e-a7b4-336c-94f7-94ac0973e426",
          },
        },
        {
          fullUrl: "urn:uuid:1bbdcc4b-3a97-311c-b0a2-e8941c7b06c7",
          resource: {
            resourceType: "Observation",
            meta: {
              profile: [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observationresults",
              ],
            },
            id: "1bbdcc4b-3a97-311c-b0a2-e8941c7b06c7",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.1.2109.1",
                value: "5625309300-weightC83-Z16682125",
              },
            ],
            category: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/observation-category",
                    code: "vital-signs",
                  },
                ],
              },
            ],
            status: "final",
            code: {
              coding: [
                {
                  code: "29463-7",
                  system: "http://loinc.org",
                },
              ],
            },
            effectiveDateTime: "2019-04-04T17:55:00.000Z",
            valueQuantity: {
              value: 97.07,
              unit: "kg",
            },
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "Observation/1bbdcc4b-3a97-311c-b0a2-e8941c7b06c7",
          },
        },
        {
          fullUrl: "urn:uuid:0acc1b4f-5461-33fe-843c-75895c0fe3a6",
          resource: {
            resourceType: "Observation",
            meta: {
              profile: [
                "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observationresults",
              ],
            },
            id: "0acc1b4f-5461-33fe-843c-75895c0fe3a6",
            identifier: [
              {
                system: "urn:oid:1.2.840.114350.1.13.362.2.7.1.2109.1",
                value: "5625309300-bmi-Z16682125",
              },
            ],
            category: [
              {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/observation-category",
                    code: "vital-signs",
                  },
                ],
              },
            ],
            status: "final",
            code: {
              coding: [
                {
                  code: "39156-5",
                  system: "http://loinc.org",
                },
              ],
            },
            effectiveDateTime: "2019-04-04T17:55:00.000Z",
            valueQuantity: {
              value: 36.73,
              unit: "kg/m2",
            },
            subject: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "Observation/0acc1b4f-5461-33fe-843c-75895c0fe3a6",
          },
        },
        {
          fullUrl: "urn:uuid:40f23d19-45d2-31ca-aea3-6dc49b72263c",
          resource: {
            resourceType: "Consent",
            id: "40f23d19-45d2-31ca-aea3-6dc49b72263c",
            status: "active",
            scope: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/consentscope",
                  code: "adr",
                },
              ],
            },
            category: [
              {
                coding: [
                  {
                    code: "45473-6",
                    display: "advance directive - living will",
                    system: "http://loinc.org",
                  },
                ],
              },
            ],
            patient: {
              reference: "Patient/b0620f1b-9ae7-3bfe-b3f8-fb92fc6ea19c",
            },
          },
          request: {
            method: "PUT",
            url: "Consent/40f23d19-45d2-31ca-aea3-6dc49b72263c",
          },
        },
        {
          fullUrl: "urn:uuid:b0bdf00f-164d-3bef-8783-0e3d663ed758",
          resource: {
            resourceType: "DocumentReference",
            id: "b0bdf00f-164d-3bef-8783-0e3d663ed758",
            type: {
              coding: [
                {
                  code: "34133-9",
                  display: "Summarization of Episode Note",
                  system: "http://loinc.org",
                },
              ],
            },
            date: "2021-09-24T13:27:38.503Z",
            status: "current",
            content: [
              {
                attachment: {
                  contentType: "text/plain",
                  data:
                    "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",
                  hash: "FQFq8WaLi6hVbWuPCv24gFCFfVQ=",
                },
              },
            ],
          },
          request: {
            method: "PUT",
            url: "DocumentReference/b0bdf00f-164d-3bef-8783-0e3d663ed758",
          },
        },
      ],
    },
  };

  zlib.gzip(JSON.stringify(fhir), function (error, gzippedResponse) {
    if (error) {
      console.log("error", error);
    }

    const compressedString = gzippedResponse.toString("base64");

    console.log("gzippedResponse", compressedString);

    let mybuf = Buffer.from(gzippedResponse, "base64");

    zlib.gunzip(mybuf, function (err, data) {
      if (err) {
        console.log("error", error);
      }

      console.log("data", data.toString());
    });
  });

  res.json(fhir);
});
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
