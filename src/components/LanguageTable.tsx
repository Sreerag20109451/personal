import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@nextui-org/react";

type Row = {
    key: string;
    name: string;
    proficiency: string;
};

const rows: Row[] = [
    {
        key: "1",
        name: "English",
        proficiency: "Professional",
    },
    {
        key: "2",
        name: "Malayalam",
        proficiency: "Native",
    },
];

type Column = {
    key: keyof Row; // Ensures the column key matches keys in Row
    label: string;
};

const columns: Column[] = [
    {
        key: "name",
        label: "Language",
    },
    {
        key: "proficiency",
        label: "Proficiency",
    },
];

export default function LanguageTable() {
    return (
        <Table aria-label="Example table with dynamic content">
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows}>
                {(item) => (
                    <TableRow key={item.key}>
                        {(columnKey) => (
                            // Use columnKey to index into the item
                            <TableCell>{item[columnKey as keyof Row]}</TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
