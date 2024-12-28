import { FilterMatchMode } from '@/components/lib/api/FilterMatchMode';
import { FilterOperator } from '@/components/lib/api/FilterOperator';
import { InputIcon } from '@/components/lib/inputicon/InputIcon';
import { Button, Column, DataTable, IconField, InputText, MultiSelect } from '@/components/lib/primereact.all';
import React, { useRef, useState } from 'react';
// import { FilterMatchMode, FilterOperator } from 'primereact/api';

export const AdvancedRiskAnalyserTable = (props) => {

  const dt = useRef(null);
  const [data, setData] = useState([
      {
          "SponsorID": 9,
          "Sponsor": "State Farm Fire and Casualty Company",
          "DealYear": 2021,
          "SponsorCreditRating": null,
          "SponsorType": "Insurer",
          "SponsorUniqueID": 9,
          "SponsorTier": 1,
          "CATBondCount": 1,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 16,
          "Sponsor": "Texas Windstorm Insurance Association",
          "DealYear": 2021,
          "SponsorCreditRating": null,
          "SponsorType": "Insurer",
          "SponsorUniqueID": 16,
          "SponsorTier": 1,
          "CATBondCount": 1,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 20,
          "Sponsor": "North Carolina Insurance Underwriting Association",
          "DealYear": 2021,
          "SponsorCreditRating": null,
          "SponsorType": "Insurer",
          "SponsorUniqueID": 20,
          "SponsorTier": 1,
          "CATBondCount": 1,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 29,
          "Sponsor": "National Flood Insurance Program",
          "DealYear": 2021,
          "SponsorCreditRating": null,
          "SponsorType": "Insurer",
          "SponsorUniqueID": 29,
          "SponsorTier": 1,
          "CATBondCount": 2,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 47,
          "Sponsor": "Oak Tree Assurance Ltd.",
          "DealYear": 2021,
          "SponsorCreditRating": null,
          "SponsorType": "Insurer",
          "SponsorUniqueID": 47,
          "SponsorTier": 1,
          "CATBondCount": 1,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 106,
          "Sponsor": "Arch Re",
          "DealYear": 2021,
          "SponsorCreditRating": null,
          "SponsorType": "Reinsurer",
          "SponsorUniqueID": 106,
          "SponsorTier": 1,
          "CATBondCount": 1,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 210,
          "Sponsor": "Frontline Insurance",
          "DealYear": 2021,
          "SponsorCreditRating": null,
          "SponsorType": "Insurer",
          "SponsorUniqueID": 210,
          "SponsorTier": 1,
          "CATBondCount": 1,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 216,
          "Sponsor": "Alphabet Inc.",
          "DealYear": 2021,
          "SponsorCreditRating": null,
          "SponsorType": "Insured",
          "SponsorUniqueID": 216,
          "SponsorTier": 1,
          "CATBondCount": 1,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 241,
          "Sponsor": "Universal Property & Casualty Insurance Company",
          "DealYear": 2021,
          "SponsorCreditRating": null,
          "SponsorType": "Insurer",
          "SponsorUniqueID": 241,
          "SponsorTier": 1,
          "CATBondCount": 1,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 242,
          "Sponsor": "Palomar Speciality Insurance Company",
          "DealYear": 2021,
          "SponsorCreditRating": "",
          "SponsorType": "Insurer",
          "SponsorUniqueID": 242,
          "SponsorTier": 1,
          "CATBondCount": 1,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 325,
          "Sponsor": "Demo Sponsor",
          "DealYear": 2021,
          "SponsorCreditRating": "A-",
          "SponsorType": "Reinsurer",
          "SponsorUniqueID": 325,
          "SponsorTier": 1,
          "CATBondCount": 3,
          "ILWCount": 2,
          "CRICount": 3,
          "SidecarCount": 1,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 344,
          "Sponsor": "American Family Mutual Insurance Company",
          "DealYear": 2022,
          "SponsorCreditRating": "A",
          "SponsorType": "Insurer",
          "SponsorUniqueID": 60,
          "SponsorTier": 1,
          "CATBondCount": 1,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 348,
          "Sponsor": "Progressive Homes Insurance Company",
          "DealYear": 2022,
          "SponsorCreditRating": "Not Available",
          "SponsorType": "Insurer",
          "SponsorUniqueID": 267,
          "SponsorTier": 1,
          "CATBondCount": 1,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 355,
          "Sponsor": "Prologis Inc.",
          "DealYear": 2021,
          "SponsorCreditRating": "Not Available",
          "SponsorType": "Insurer",
          "SponsorUniqueID": 355,
          "SponsorTier": 1,
          "CATBondCount": 1,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 374,
          "Sponsor": "GeoVera Insurance Holdings, Ltd.",
          "DealYear": 2022,
          "SponsorCreditRating": "Not Available",
          "SponsorType": "Insurer",
          "SponsorUniqueID": 258,
          "SponsorTier": 1,
          "CATBondCount": 1,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 379,
          "Sponsor": "Mitsui Sumitomo Insurance Co. Ltd.",
          "DealYear": 2022,
          "SponsorCreditRating": "AAA",
          "SponsorType": "Insurer",
          "SponsorUniqueID": 202,
          "SponsorTier": 1,
          "CATBondCount": 1,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 385,
          "Sponsor": "Allstate Insurance Company",
          "DealYear": 2022,
          "SponsorCreditRating": "Not Available",
          "SponsorType": "Insurer",
          "SponsorUniqueID": 44,
          "SponsorTier": 1,
          "CATBondCount": 1,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 386,
          "Sponsor": "Kin Interinsurance Network",
          "DealYear": 2022,
          "SponsorCreditRating": "A",
          "SponsorType": "Insurer",
          "SponsorUniqueID": 386,
          "SponsorTier": 1,
          "CATBondCount": 1,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 387,
          "Sponsor": "Heritage Property & Casualty Company",
          "DealYear": 2022,
          "SponsorCreditRating": "Not Available",
          "SponsorType": "Insurer",
          "SponsorUniqueID": 260,
          "SponsorTier": 2,
          "CATBondCount": 1,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 393,
          "Sponsor": "SureChoice Underwriters Reciprocal Exchange",
          "DealYear": 2022,
          "SponsorCreditRating": "AAA",
          "SponsorType": "Insurer",
          "SponsorUniqueID": 393,
          "SponsorTier": 1,
          "CATBondCount": 1,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 396,
          "Sponsor": "USAA",
          "DealYear": 2022,
          "SponsorCreditRating": "Not Available",
          "SponsorType": "Insurer",
          "SponsorUniqueID": 10,
          "SponsorTier": 2,
          "CATBondCount": 2,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 408,
          "Sponsor": "Citizens Property Insurance Corp.",
          "DealYear": 2022,
          "SponsorCreditRating": "Not Available",
          "SponsorType": "Insurer",
          "SponsorUniqueID": 192,
          "SponsorTier": 3,
          "CATBondCount": 1,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 416,
          "Sponsor": "Core Specialty Insurance Holdings, Inc.",
          "DealYear": 2022,
          "SponsorCreditRating": "Not Available",
          "SponsorType": "Insurer",
          "SponsorUniqueID": 416,
          "SponsorTier": 1,
          "CATBondCount": 1,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 417,
          "Sponsor": "Texas Windstorm Insurance Association",
          "DealYear": 2022,
          "SponsorCreditRating": "Not Available",
          "SponsorType": "Insurer",
          "SponsorUniqueID": 16,
          "SponsorTier": 1,
          "CATBondCount": 1,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 419,
          "Sponsor": "Louisiana Citizens Property Insurance Corp.",
          "DealYear": 2022,
          "SponsorCreditRating": "AAA",
          "SponsorType": "Insurer",
          "SponsorUniqueID": 43,
          "SponsorTier": 1,
          "CATBondCount": 1,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 1422,
          "Sponsor": "Canopius Group Limited",
          "DealYear": 2022,
          "SponsorCreditRating": "Not Available",
          "SponsorType": "Insurer",
          "SponsorUniqueID": 1422,
          "SponsorTier": 1,
          "CATBondCount": 1,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      },
      {
          "SponsorID": 1443,
          "Sponsor": "American Family Mutual Insurance Company",
          "DealYear": 2023,
          "SponsorCreditRating": "A",
          "SponsorType": "Insurer",
          "SponsorUniqueID": 60,
          "SponsorTier": 1,
          "CATBondCount": 1,
          "ILWCount": 0,
          "CRICount": 0,
          "SidecarCount": 0,
          "PCRScoreFinancial": null,
          "PCRScoreUnderwriting": null,
          "PCRScoreMarketplaceRelationship": null,
          "PCRScoreData": null,
          "PCRScoreTotal": null
      }
  
]);

const [columns, setColumns] = useState(Object.keys(data[0]).map(column=>{
  return {
    field: column,
    header: column,
    sortable: true,
    filter: true,
    resizable: true,
    draggable: true,
    // headerStyle: { width: '150px' }
  }
}));

const [filters, setFilters] = useState({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  'SponsorID': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
  'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
  representative: { value: null, matchMode: FilterMatchMode.IN },
  status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
});

const [visibleColumns, setVisibleColumns] = useState(columns);

const onColumnToggle = (event) => {
  let selectedColumns = event.value;
  let orderedSelectedColumns = columns.filter((col) => selectedColumns.some((sCol) => sCol.field === col.field));

  setVisibleColumns(orderedSelectedColumns);
};

const onColReorder = (e) => {
    setColumns(e.columns.map(column=>column.props));
};
const exportColumns = visibleColumns.map((col) => ({ title: col.header, dataKey: col.field }));



const exportCSV = (selectionOnly) => {
  dt.current.exportCSV({ selectionOnly });
};

const exportPdf = () => {
  import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then(() => {
          const doc = new jsPDF.default(0, 0);

          doc.autoTable(exportColumns, data);
          doc.save('data.pdf');
      });
  });
};

const exportExcel = () => {
  import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer = xlsx.write(workbook, {
          bookType: 'xlsx',
          type: 'array'
      });

      saveAsExcelFile(excelBuffer, 'data');
  });
};

const saveAsExcelFile = (buffer, fileName) => {
  import('file-saver').then((module) => {
      if (module && module.default) {
          let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
          let EXCEL_EXTENSION = '.xlsx';
          const data = new Blob([buffer], {
              type: EXCEL_TYPE
          });

          module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
      }
  });
};
const onGlobalFilterChange = (event) => {
  const value = event.target.value;
  let _filters = { ...filters };

  _filters['global'].value = value;

  setFilters(_filters);
};


const header = (
  <div  className="flex align-items-center justify-content-end gap-4">
  <IconField iconPosition="left">
          <InputIcon className="pi pi-search" />
          <InputText type="search" value={filters['global'] ? filters['global'].value : '' || ''} onChange={(e) => onGlobalFilterChange(e)} placeholder="Global Search" />
      </IconField>
<MultiSelect value={visibleColumns} options={columns} optionLabel="header" onChange={onColumnToggle} className="w-full sm:w-20rem" display="chip" />
<div className="flex align-items-center justify-content-end gap-2">
            <Button type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
            <Button type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" />
        </div>
  </div>
)



return (
    <div>
        <h3>Draggable Columns</h3>
        <DataTable 
            ref={dt} 
            value={data} 
            reorderableColumns 
            onColReorder={onColReorder}
            showGridlines
            paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
            sortMode="multiple"
            stripedRows
            removableSort
            resizableColumns
            header={header}
            filters={filters} onFilter={(e) => setFilters(e.filters)}
            >
               <Column header="#" headerStyle={{ width: '3rem' }} body={(data, options) => options.rowIndex + 1} frozen></Column>
            {visibleColumns.map((col,index) => (
                <Column key={index} field={col.field} header={col.header}  sortable  filter filterPlaceholder="Search" />
            ))}
        </DataTable>
    </div>
);
};
