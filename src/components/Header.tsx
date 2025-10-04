import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-start gap-2 pb-8">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        My tasks
      </h1>
      <p className="text-sm text-slate-500">
        Organize your personal and business todos in one place.
      </p>
    </div>
  );
};

export default Header;
