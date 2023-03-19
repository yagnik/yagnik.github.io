export function Timeline({ children }) {
  return (
    <div className="before:content-[' '] before:w-12 before:h-12 before:bg-red-500">
      a timeline view
      {children}
    </div>
  )
}

// const StyledNowSection = styled.section`
//   h3 {
//     margin-top: -3.4rem;
//   }
//   ::before {
//     content: "";
//     width: 12px;
//     height: 12px;
//     border: 2px solid var(--color-gray-300);
//     background: var(--color-cream);
//     display: inline-block;
//     margin-left: -3.2rem;
//     margin-right: 1.7rem;
//     position: relative;
//     top: -1rem;
//     border-radius: 50%;
//   }
//   p:last-child {
//     margin-bottom: 0;
//   }
//   border-left: 1px dashed var(--color-gray-300);
//   padding-left: 2.8rem;
//   margin-left: -1.2rem;
//   margin-bottom: var(--space-3xl);
// `;
