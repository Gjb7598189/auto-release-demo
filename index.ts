
type FILETYPE = 'FOLDER' | 'FILE'

type File2<T extends FILETYPE> = {
    children: T extends 'FILE' ? undefined : File2<T>
}

const f:File2<'FILE'> = {
    children: undefined
}

const f2:File2<'FOLDER'> = {
    children: { children: undefined }
}