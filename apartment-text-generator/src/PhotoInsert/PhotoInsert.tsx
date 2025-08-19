import React from "react";
import "./PhotoInsert.css";

export type PhotoInsertProps = {
  onFilesChange: (files: File[]) => void;
  accept?: string;
  maxFiles?: number;
};

const PhotoInsert: React.FC<PhotoInsertProps> = ({
  onFilesChange,
  accept = "image/*",
  maxFiles,
}) => {
  const [files, setFiles] = React.useState<File[]>([]);
  const [isDragActive, setIsDragActive] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const addFiles = (incoming: FileList | File[]) => {
    const incomingArray = Array.from(incoming).filter((file) =>
      file.type.startsWith("image/")
    );
    const merged = [...files, ...incomingArray];
    const limited =
      typeof maxFiles === "number" ? merged.slice(0, maxFiles) : merged;
    setFiles(limited);
    onFilesChange(limited);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) addFiles(e.target.files);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      addFiles(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  };

  const handleRemove = (index: number) => {
    const next = files.filter((_, i) => i !== index);
    setFiles(next);
    onFilesChange(next);
  };

  const openFileDialog = () => fileInputRef.current?.click();

  const previewUrls = React.useMemo(
    () => files.map((file) => ({ file, url: URL.createObjectURL(file) })),
    [files]
  );

  React.useEffect(() => {
    return () => {
      previewUrls.forEach((p) => URL.revokeObjectURL(p.url));
    };
  }, [previewUrls]);

  return (
    <div className="photo-insert">
      <div
        className={`photo-dropzone ${isDragActive ? "drag-active" : ""}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={openFileDialog}
        role="button"
        aria-label="Fotos hinzufügen"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") openFileDialog();
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple
          onChange={handleInputChange}
          className="photo-file-input"
          aria-hidden
        />
        <div className="photo-dropzone-content">
          <span className="photo-emoji">📷</span>
          <p className="photo-title">Fotos hierher ziehen</p>
          <p className="photo-subtitle">oder klicken, um auszuwählen</p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="photo-previews">
          {previewUrls.map((p, index) => (
            <div key={`${p.file.name}-${index}`} className="photo-preview-item">
              <img
                src={p.url}
                alt={p.file.name}
                className="photo-preview-image"
              />
              <button
                type="button"
                className="photo-remove-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(index);
                }}
                aria-label={`Bild ${index + 1} entfernen`}
              >
                ✖
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoInsert;
