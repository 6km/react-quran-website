"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ReadingView } from "react-quran";

export default function Home() {
  const [page, setPage] = useState(1);

  const arabicPageNumber = useMemo(() => page.toLocaleString("ar-EG"), [page]);

  return (
    <main>
      <div className="mx-auto w-fit mt-12">
        <ReadingView
          page={page}
          readingViewStyles={{
            width: "480px",
            backgroundColor: "#FFFFFF05",
            borderRadius: 8,
            border: "1px solid #FFFFFF10",
          }}
          surahTitleStyles={{
            borderColor: "#FFFFFF10",
            borderRadius: "8px 8px 0px 0px",
            backgroundColor: "#FFFFFF05",
          }}
        />
      </div>

      <div className="mx-auto w-fit mt-8 flex items-center justify-center gap-8">
        <button
          onClick={() => setPage((current) => current - 1)}
          disabled={page === 1}
        >
          الصفحة السابقة
        </button>
        <span>{arabicPageNumber}</span>
        <button
          onClick={() => setPage((current) => current + 1)}
          disabled={page === 604}
        >
          الصفحة التالية
        </button>
      </div>
    </main>
  );
}
