import React, { useState } from "react";

const InputFile = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDelete = () => {
    setSelectedFile(null);
    // Limpiar el valor del input de archivo
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <label className="inline-flex items-center bg-gray-200 rounded-lg p-2 cursor-pointer hover:bg-gray-300">
        {selectedFile ? (
          <span className="text-lg font-medium">Cambiar archivo</span>
        ) : (
          <span className="text-lg font-medium">Seleccionar archivo</span>
        )}
        <input
          id="fileInput"
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx,image/*"
        />
      </label>
      {selectedFile ? (
        <div>
          <button
            style={{ width: 148 }}
            className="m-2 bg-red-700 text-white p-2 rounded-lg"
            onClick={handleDelete}
          >
            Eliminar
          </button>
          <p className="text-gray-500">
            Archivo seleccionado: {selectedFile.name}
          </p>
        </div>
      ) : (
        <p className="text-gray-500">Opcional.</p>
      )}
    </div>
  );
};

export default InputFile;
