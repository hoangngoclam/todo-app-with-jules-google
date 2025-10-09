import React from 'react';

/**
 * A header component that displays the title and a brief description of the application.
 *
 * This component renders a static header with a title and a subtitle, providing a
 * clear and concise introduction to the application's purpose.
 *
 * @returns The rendered `Header` component.
 */
const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-start gap-2 pb-8">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        My tasks AAB
      </h1>
      <p className="text-sm text-slate-500">
        Organize your personal and business todos in one place.
      </p>
    </div>
  );
};

export default Header;
